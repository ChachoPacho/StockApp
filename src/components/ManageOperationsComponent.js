import React, { useContext, useRef, useState } from "react";

import { View, Text, Button, TextInput } from "react-native";
import Select from 'react-select'

import Style from "../styles/ManageOperationsStyle";

import { MANAGE_METHOD } from "../../config";

import { AppContext } from "../../context/AppContext";
import { ProductsDB } from "../classes/ProductsDB";

export default function ({ items }) {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [method, setMethod] = useState(MANAGE_METHOD.ADD);
  const [stockQuantity, setStockQuantity] = useState(0);
  const [_, setHandleUpdateStockView] = useContext(AppContext)

  const stockComponent = useRef();
  const productComponent = useRef();

  const METHOD_STORAGE = [
    {
      value: MANAGE_METHOD.ADD,
      label: "Añadir"
    },
    {
      value: MANAGE_METHOD.REMOVE,
      label: "Quitar"
    }
  ];

  const applyOperation = async () => {
    if (!selectedProduct) {
      productComponent.current.focus();
    }
    if (+stockQuantity === 0) {
      stockComponent.current.focus();
    }
    await ProductsDB.applyOperationInProduct(selectedProduct.value, method, stockQuantity);

    setStockQuantity(0);
    setSelectedProduct("");
    setHandleUpdateStockView(a => !a);
  }

  return (
    <>
      <Text style={Style.header}>
        OPERACIONES
      </Text>
      <View style={Style.productSelect}>
        <Select
          options={items}
          isSearchable={false}
          value={selectedProduct}
          ref={productComponent}
          openMenuOnFocus
          placeholder="Seleccionar Producto"
          onChange={(newValue) => { setSelectedProduct(newValue) }}
        />
      </View>
      <View style={Style.methodContainer}>
        <TextInput
          editable
          value={stockQuantity}
          style={Style.stockInput}
          ref={stockComponent}
          clearTextOnFocus
          keyboardType={"number-pad"}
          onChangeText={(value) => {
            if (Number.isInteger(+value) && +value >= 0) {
              setStockQuantity(+value);
            }
          }}
        />
        <View style={Style.methodSelect}>
          <Select
            options={METHOD_STORAGE}
            isSearchable={false}
            defaultValue={METHOD_STORAGE[0]}
            onChange={(newValue) => { setMethod(newValue.value) }}
          />
        </View>
      </View>
      <View style={Style.button}>
        <Button title="Aplicar" onPress={applyOperation} />
      </View>
    </>
  );
}
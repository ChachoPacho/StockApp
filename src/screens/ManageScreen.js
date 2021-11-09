import React, { useState, useEffect, useContext } from "react";

import { View } from "react-native";

import ManageOperationsComponent from '../components/ManageOperationsComponent';
import ManageChargeComponent from '../components/ManageChargeComponent';

import Style from "../styles/ManageStyle";

import { AppContext } from "../../context/AppContext";
import { ProductsDB } from "../classes/ProductsDB";

export default function () {
  const [productsReferences, setProductsReferences] = useState([]);
  const [productsStorage, setProductsStorage] = useState([]);
  const [handleUpdateStockView, _] = useContext(AppContext)

  useEffect(() => {
    ProductsDB.getProductsArray().then((products) => {
      const productsReferences = products.map(product => ({
        value: product.id,
        label: product.name
      }));

      setProductsStorage(products);
      setProductsReferences(productsReferences);
    })
  }, [handleUpdateStockView])

  return (
    <View>
      <View style={Style.container}>
        <ManageOperationsComponent items={productsReferences} />
      </View>
      <View style={Style.container}>
        <ManageChargeComponent items={productsStorage} />
      </View>
    </View>
  );
}
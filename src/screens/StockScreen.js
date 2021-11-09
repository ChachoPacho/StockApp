import React, { useState, useEffect, useContext } from "react";
import { View, TextInput, Button, FlatList } from "react-native";

import { AppContext } from "../../context/AppContext";
import { ProductsDB } from "../classes/ProductsDB";

import StockProductComponent from "../components/StockProductComponent";

import Styles from "../styles/StockStyle";

export default function () {
  const [productInputValue, setProductToStorage] = useState("");
  const [products, setProducts] = useState({});
  const [handleUpdateStockView, setHandleUpdateStockView] = useContext(AppContext);

  useEffect(() => {
    ProductsDB.getProductsArray().then(setProducts);
  }, [handleUpdateStockView]);

  async function addProduct() {
    const product = {
      name: productInputValue,
      stock: 0,
      price: 0
    };
    await ProductsDB.appendProduct(product);
    setProductToStorage("");
    setHandleUpdateStockView(!handleUpdateStockView);
  }

  async function updateProduct({ id, method, field, value, update }) {
    if (method === "REMOVE") {
      await ProductsDB.removeProduct(id);
    } else if (method === "UPDATE") {
      const newProduct = await ProductsDB.getProduct(id);
      newProduct[field] = value;

      await ProductsDB.appendProduct(newProduct);
    }
    if (update) {
      setHandleUpdateStockView(!handleUpdateStockView);
    }
  }

  return (
    <View>
      <View style={Styles.container}>
        <TextInput
          style={Styles.input}
          editable
          maxLength={40}
          placeholder="Producto"
          value={productInputValue}
          onChangeText={setProductToStorage}
        />
        <View style={Styles.button}>
          <Button title="Añadir" onPress={addProduct} />
        </View>
      </View>
      <View>
        <FlatList
          data={products}
          scrollEnabled
          showsVerticalScrollIndicator
          renderItem={({ item }) => StockProductComponent(item, updateProduct)}
        />
      </View>
    </View>
  );
}

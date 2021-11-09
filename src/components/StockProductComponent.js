import React from "react";

import { View, Text, TextInput } from "react-native";

import Style from "../styles/StockProductStyle";
import { STOCK_METHOD, PRODUCT_FIELD } from "../../config";

// AÑADIR DROPDOWN MOVE INDEX VIEW;

export default function (item, callback) {
  const REQ = {
    id: item.id,
    method: STOCK_METHOD.UPDATE,
    field: "",
    value: "",
    update: false
  };

  return (
    <View style={Style.container}>
      <View style={Style.productSpecsContainer}>
        <View style={Style.productNameContainer}>
          <TextInput
            editable
            style={Style.productName}
            multiline
            underlineColorAndroid='transparent'
            autoCorrect={false}
            defaultValue={item.name}
            onBlur={({ target: { value } }) => {
              if (value !== item.name) {
                if (value === "") {
                  REQ.update = true;
                  REQ.method = STOCK_METHOD.REMOVE;
                }
                REQ.field = PRODUCT_FIELD.NAME;
                REQ.value = value;
                callback(REQ);
              }
            }}
          />
        </View>
        <View style={Style.productPriceContainer}>
          <Text style={Style.cashSymbol}>$</Text>
          <TextInput
            editable
            style={Style.productPrice}
            underlineColorAndroid='transparent'
            defaultValue={item.price}
            keyboardType={"number-pad"}
            onBlur={({ target: { value } }) => {
              if (+value && +value !== item.price) {
                REQ.field = PRODUCT_FIELD.PRICE;
                REQ.value = value;
                REQ.update = true;
                callback(REQ);
              }
            }}
          />
        </View>
      </View>
      <View style={Style.productSpecsContainer}>
        <Text style={Style.stockText}>{item.stock}u.</Text>
        <Text style={Style.totalText}>${item.stock * item.price}</Text>
      </View>
    </View >
  );
}
import React, { useState, useEffect } from "react";

import { View, Text, Button, Switch, TextInput } from "react-native";
import { Registration } from "../classes/Registration";

import Style from "../styles/ManageChargeStyle";

export default function ({ items }) {
  const [isAll, setIsAll] = useState(true);
  const [quantityValue, setQuantityValue] = useState([]);

  useEffect(() => {
    const serializeStock = Object.values(items)
      .map(item => Object.assign({ quantity: 0 }, item))
    setQuantityValue(serializeStock);
  }, [items])

  const updateQuantity = (id, value) => {
    const serializeStock = quantityValue.map((item) => {
      if (id === item.id) {
        item.quantity = +value;
      }
      return item;
    })
    setQuantityValue(serializeStock);
  }

  const applyCharge = () => {
    const stockData = (isAll) ? items : quantityValue;
    const registration = new Registration(stockData).get();
    console.log(registration);
  }

  let i = 0;

  return (
    <>
      <Text style={Style.header}>
        COBRAR
      </Text>
      <View style={Style.allSwitchContainer}>
        <Text style={Style.allSwitchText}>TODOS</Text>
        <Switch
          onValueChange={() => setIsAll(_state => !_state)}
          value={isAll}
        />
      </View>
      <View style={[{ display: (isAll) ? "none" : "block" }]}>
        {
          quantityValue.map((item) => (
            <View key={++i} style={Style.productContainer}>
              <Text style={Style.productText}>{item.name}</Text>
              <TextInput
                style={Style.productStock}
                editable
                underlineColorAndroid='transparent'
                value={item.quantity}
                keyboardType={"number-pad"}
                onChangeText={text => {
                  const value = +text;
                  if (Number.isInteger(value) && +item.stock >= value && value >= 0) {
                    updateQuantity(item.id, value);
                  }
                }}
              />
            </View>
          ))
        }
      </View>
      <View style={Style.button}>
        <Button title="Cobrar" onPress={applyCharge} />
      </View>
    </>
  );
}
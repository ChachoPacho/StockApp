import React from "react";

import { View } from "react-native";

import HistoryChargesComponent from "../components/HistoryChargesComponent";
import HistoryOperationsComponents from "../components/HistoryOperationsComponents";

import Style from "../styles/HistoryStyle";

export default function () {


  return (
    <View>
      <View style={Style.container}>
        <HistoryChargesComponent />
      </View>
      <View style={Style.container}>
        <HistoryOperationsComponents />
      </View>
    </View>
  );
}
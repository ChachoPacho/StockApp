import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HistoryScreen from "./src/screens/HistoryScreen";
import ManageScreen from "./src/screens/ManageScreen";
import StockScreen from "./src/screens/StockScreen";

import { AppProvider } from "./context/AppContext";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Stock" component={StockScreen} />
          <Tab.Screen name="Config" component={ManageScreen} />
          <Tab.Screen name="Historial" component={HistoryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;

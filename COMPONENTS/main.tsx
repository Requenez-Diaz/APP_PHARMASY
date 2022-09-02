import React from "react";
import Constants from "expo-constants";
import { View } from "react-native";
import InventarioLista from "./inventarioLista";
import AppBar from "./AppBar";

const Main = () => {
  return (
    <View style={{flex: 1 }}>
      <AppBar/>
      <InventarioLista />
    </View>
  );
};

export default Main;

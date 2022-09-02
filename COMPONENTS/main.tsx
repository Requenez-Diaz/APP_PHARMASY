import React from "react";
import { View } from "react-native";
import AppBar from "./AppBar";
import InventarioLista from './InventarioLista'

const Main = () => {
  return (
    <View style={{flex: 1 }}>
      <AppBar/>
      <InventarioLista />
    </View>
  );
};

export default Main;

import React from "react";
import Constants from "expo-constants";
import { Text, View } from "react-native";
import InventarioLista from "./inventarioLista";

const main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <InventarioLista />
    </View>
  );
};

export default main;

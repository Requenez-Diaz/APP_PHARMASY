import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StylesText from "./stylesText";
import InventarioStats from "./InventaroStats";

const InventarioItem = (Props) => (
  <View key={Props.id} style={Styles.container}>
    <Text
      style={{fontWeight: "bold",padding: 4, color: 'blue', alignSelf: 'flex-start', backgroundColor: "skyblue", }}
    >
      Nombre Farmacia
    </Text>
    <Text>{Props.nombre}</Text>
    <StylesText estilo="vencido" children={Props.id} type="ID" />
    <StylesText
      estilo="vencido"
      children={Props.nombreMedicamento}
      type="Medicamento"
    />
    <Text>Descripcion: {Props.description}</Text>
    <InventarioStats {...Props} />
  </View>
);

const Styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
});

export default InventarioItem;

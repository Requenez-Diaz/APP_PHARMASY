import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StylesText from "./stylesText";

const InventarioItem = (Props) => (
  <View key={Props.id} style={Styles.container}>
    <StylesText estilo="vencido" children={Props.id} type='ID'/>
    <StylesText estilo="vencido" children={Props.nombreMedicamento} type='Medicamento'/>
    <Text>Descripcion: {Props.description}</Text>
    <Text>Horario: {Props.totalesDiarias}</Text>
    <Text>Inventario: {Props.inventarioActual}</Text>
  </View>
);

const Styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
})


export default InventarioItem;

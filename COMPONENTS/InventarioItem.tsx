import React from "react";
import { Text, View, StyleSheet } from "react-native";
import stylesText from './stylesText'

const InventarioItem = (Props) => (
  <View key={Props.id} style={Styles.container}>
    <Text>ID: {Props.id}</Text>
    <Text>Medicamento: {Props.nombreMedicamento}</Text>
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

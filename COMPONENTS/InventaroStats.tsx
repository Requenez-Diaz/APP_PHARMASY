import React from "react";
import { View } from "react-native";
import { Text } from "react-native";

const parseThousands = value => {
    return value >= 2000
    ? `${Math.round(value / 100) / 10 }K`
    : String(value)
  }
  
  const InventarioStats = (Props) => {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View>
          <Text style={{textAlign: 'center', color: 'blue', fontWeight: 'bold' }}>Horario:</Text>
          <Text>{Props.totalesDiarias}</Text>
        </View>
        <View>
          <Text style={{textAlign: 'center', color: 'blue', fontWeight: 'bold' }} >Inventario</Text>
          <Text>{Props.inventarioActual}</Text>
        </View>
        <View>
          <Text style={{textAlign: 'center', color: '#FFB533', fontWeight: 'bold' }} >Ventas Diarias</Text>
          <Text style={{textAlign: 'center', color: '#33DDFF', fontWeight: 'bold' }} >{parseThousands(Props.ventasDiarias)}</Text>
        </View >
        <View>
          <Text style={{textAlign: 'center', color: 'green', fontWeight: 'bold' }} >Precio</Text>
          <Text style={{textAlign: 'center', color: 'black', fontWeight: 'bold' }} >{Props.precio}</Text>
        </View>
        <View>
          <Text style={{textAlign: 'center', color: 'red', fontWeight: 'bold' }} >Vencidas</Text>
          <Text style={{textAlign: 'center', color: 'red', fontWeight: 'bold' }} >{Props.vencidas}</Text>
        </View>
      </View>
    );
  };

  export default InventarioStats
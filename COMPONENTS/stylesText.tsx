import React from "react";
import { Text, StyleSheet } from "react-native";

interface Props {
    estilo?: 'deffault' | 'vencido';
    type?: string;
    children?: string;
}

export default function StylesText ({ estilo, children, type }: Props) {
    return (
        <Text style={[
            estilo === 'vencido' ? styles.vencido : styles.deffault
        ]}>
           
           {type}: {children}
        </Text>
    )
}

const styles= StyleSheet.create ({
    deffault: {
        fontSize: 12,
        color: 'grey'
    },
    vencido: {
        fontSize: 12,
        color: 'red'
    }
})
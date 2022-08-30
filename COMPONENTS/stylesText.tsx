import React from "react";
import { Text, StyleSheet } from "react-native";

const styles= StyleSheet.create ({
    text: {
        fontSize: 12,
        color: 'grey'
    },
    bold: {
        fontWeight: 'bold'
    },
    green: {
        color: 'green'
    }, 
    big: {
        fontSize: 28
    },
    smalls: {
        fontSize: 18
    }
})

export default function stylesText ({green, bold, children, big, smalls}) {
    const textStyles = [
        styles.text,
        green && styles.green,
        big && styles.big,
        smalls && styles.smalls,
        bold && styles.bold
    ]
    return (
        <Text style={textStyles}>
            {children}
        </Text>
    )

}
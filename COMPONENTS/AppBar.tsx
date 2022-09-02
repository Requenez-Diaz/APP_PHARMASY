import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import StylesText from './stylesText';
import Constant from 'expo-constants';



const AppBar = () => {
    return (
        <View style={{ backgroundColor: '#E85540', paddingTop: Constant.statusBarHeight + 10,
        paddingBottom: 10, paddingLeft: 10}}>
            <Text style={{ fontWeight: 'bold'}}>
                Inventarios Farmacias
            </Text>
        </View>
    )
}
const start = StyleSheet.create ({
    container3: {

    }
})

export default AppBar;
import React from 'react';
import { Text, StyleSheet, Platform, View } from 'react-native';
import Clima from "./clima/clima";
import Formulario from "./clima/formulario";

const ClimaMain = () => {
    return (
        <View>
            <Formulario />
        </View>
    );
};

export default ClimaMain;
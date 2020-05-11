import React from 'react';
import { Text, StyleSheet, View, TextInput, TouchableWithoutFeedback } from 'react-native';
import { Picker } from "@react-native-community/picker";

const Formulario = () => {
    return (
        <View>
            <View style={styles.formulario}>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='Ciudad'
                        placeholderTextColor='#666'
                    />
                </View>
                <View>
                    <Picker
                        itemStyle={{ height: 120, backgroundColor: '#FFF' }}
                    >
                        <Picker.Item label='--- SELECCIONA UN PAÍS ---' />
                        <Picker.Item label='ESTADOS UNIDOS' value='US' />
                        <Picker.Item label='MÉXICO' value='MX' />
                        <Picker.Item label='COLOMBIA' value='CO' />
                        <Picker.Item label='ARGENTINA' value='AR' />
                        <Picker.Item label='COSTA RICA' value='CR' />
                        <Picker.Item label='ESPAÑA' value='ES' />
                    </Picker>
                </View>

                <TouchableWithoutFeedback>
                    <View style={styles.btnBuscar}>
                        <Text style={styles.txtBuscar}>
                            Buscar clima
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    formulario: {
        // marginTop: 100
    },
    input: {
        padding: 10,
        height: 50,
        backgroundColor: '#63a1d7',
        fontSize: 20,
        borderRadius: 50,
        textAlign: 'center',
        marginBottom: 20,
        color: 'white'
    },
    btnBuscar: {
        marginTop: 50,
        backgroundColor: '#1e4567',
        padding: 10,
        justifyContent: 'center',
        borderRadius: 50
    },
    txtBuscar: {
        color: 'white',
        textAlign: 'center',
        fontSize: 22,
        textTransform: 'uppercase'
    }
});

export default Formulario;
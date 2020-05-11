import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { Picker } from "@react-native-community/picker";

const Formulario = ({ moneda, criptomoneda, setMoneda, setCriptomoneda, setConsultarAPI }) => {

    const [criptomonedas, setCriptomonedas] = useState([]);

    useEffect(() => {
        fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD')
            .then(res => res.json())
            .then(({ Data }) => {
                console.log(Data);
                setCriptomonedas(Data);
            });
    }, []);

    const cotizar = () => {
        console.log('Cotizando...')
        if (moneda.trim() === '' || criptomoneda.trim() === '') {
            showAlert();
        } else {
            setConsultarAPI(true);
        }
    };

    const showAlert = () => {
        Alert.alert(
            'Error...',
            'Los dos campos son obligatorios...',
            [
                {
                    text: 'Ok'
                }
            ]
        )
    };

    return (
        <View>
            <Text style={styles.label}>Moneda</Text>
            <Picker
                onValueChange={moneda => { setMoneda(moneda); console.log(moneda) }}
                selectedValue={moneda}
            >
                <Picker.Item label='- SELECCIONE -' value='' itemStyle={{ textAlign: 'center' }} />
                <Picker.Item label='DOLAR USA' value='USD' />
                <Picker.Item label='PESO COLOMBIANO' value='COP' />
                <Picker.Item label='EURO' value='EUR' />
                <Picker.Item label='LIBRA ESTERLINA' value='GBP' />
            </Picker>

            <Text style={styles.label}>Criptomoneda</Text>

            <Picker
                onValueChange={criptomoneda => { setCriptomoneda(criptomoneda); console.log(criptomoneda) }}
                selectedValue={criptomoneda}
            >
                <Picker.Item label='- SELECCIONE -' value='' />
                {criptomonedas.map(({ CoinInfo }) => (
                    <Picker.Item key={CoinInfo.Id} label={CoinInfo.FullName.toUpperCase()} value={CoinInfo.Name} itemStyle={{ textTransform: 'uppercase' }} />
                ))}
            </Picker>

            <TouchableHighlight style={styles.btnCotizar} onPress={cotizar}>
                <Text style={styles.txtCotizar}>Cotizar</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Lato-Regular',
        fontSize: 22,
        marginVertical: 20,
        textTransform: 'uppercase'
    },
    btnCotizar: {
        backgroundColor: '#5E49E2',
        padding: 10,
        marginTop: 20,
        marginHorizontal: '2.5%',
        borderRadius: 20
    },
    txtCotizar: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});

export default Formulario;
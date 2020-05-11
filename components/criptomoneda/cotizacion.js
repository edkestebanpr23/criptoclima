import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cotizacion = ({ resultado, criptomoneda }) => {
    if (Object.keys(resultado).length === 0) return null;

    return (
        <View style={styles.resultado}>
            {/* Primero aplica los estilos de texto y luego los de precio :v */}
            <Text style={[styles.texto, styles.precio]}>
                <Text style={styles.span}>{resultado.PRICE}</Text>
            </Text>
            <Text style={styles.texto}>Precio más alto del día: {' '}
                <Text style={styles.span}>{resultado.HIGHDAY}</Text>
            </Text>
            <Text style={styles.texto}>Precio más bajo del día: {' '}
                <Text style={styles.span}>{resultado.LOWDAY}</Text>
            </Text>
            <Text style={styles.texto}>Variación últimas 24 horas: {' '}
                <Text style={styles.span}>{resultado.CHANGEPCT24HOUR}%</Text>
            </Text>
            <Text style={styles.texto}>Última actualización: {' '}
                <Text style={styles.span}>{resultado.LASTUPDATE}</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    resultado: {
        backgroundColor: '#5E49E2',
        // marginTop: 20,
        padding: 20
    },
    texto: {
        color: '#FFF',
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        marginBottom: 10,
    },
    precio: {
        /**
         * El precio hereda los estilos de texto en su etiqueta, ver etiqueta de precio...
         */
        // fontFamily: 'Lato-Regular',
        // marginBottom: 10,
        fontSize: 38
    },
    span: {
        fontFamily: 'Lato-Black'
    }
});

export default Cotizacion;
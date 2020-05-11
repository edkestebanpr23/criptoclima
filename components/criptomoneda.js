import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import Header from "./criptomoneda/header";
import Formulario from "./criptomoneda/formulario";
import Cotizacion from "./criptomoneda/cotizacion";

const Criptomoneda = () => {
    const [moneda, setMoneda] = useState('');
    const [criptomoneda, setCriptomoneda] = useState('');
    const [consultarAPI, setConsultarAPI] = useState(false);
    const [resultado, setResultado] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (consultarAPI) {
            // console.log('Listo para cotizar...');
            const consutar = () => {
                fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`)
                    .then(res => res.json())
                    .then(cotizacion => {
                        console.log(cotizacion.DISPLAY[criptomoneda][moneda]);
                        setConsultarAPI(false);
                        setResultado(cotizacion.DISPLAY[criptomoneda][moneda])
                    });
            };

            // SetTimeOut para mostrar un "cargando"
            setLoading(true);
            setTimeout(() => {
                consutar();
                setLoading(false);
            }, 2000);


        }
    }, [consultarAPI])

    // Mostrar el spinner o el resultado
    const componente = loading ? <ActivityIndicator size='large' color='#5E40E2' /> : <Cotizacion resultado={resultado} criptomoneda={criptomoneda} />;

    return (
        <>
            <View>
                <Header />
                <Image
                    style={styles.imagen}
                    source={{ uri: 'https://revistabyte-es.exactdn.com/wp-content/uploads/2019/10/que-son-las-criptomonedas-e-invertir-en-criptomonedas.jpg?strip=all&lossy=0&quality=70&resize=696%2C461&ssl=1' }}
                />
                {/* Así es como puedo crear variables aquí y modificarlas dentro de otro componente :v */}
                <Formulario
                    moneda={moneda}
                    criptomoneda={criptomoneda}
                    setMoneda={setMoneda}
                    setCriptomoneda={setCriptomoneda}
                    setConsultarAPI={setConsultarAPI}
                />

                <View style={{ marginVertical: 40 }}>
                    {componente}
                </View>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    imagen: {
        width: '100%',
        height: 150,
    }
});

export default Criptomoneda;
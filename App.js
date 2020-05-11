import React, { useState } from 'react';
import { StyleSheet, ScrollView, TouchableHighlight, Text, View } from 'react-native';
import Criptomoneda from "./components/criptomoneda";
import ClimaMain from "./components/climaMain";

const App = () => {
  const [clima, setClima] = useState(true);
  console.log('Hola mundo!!!')

  const cambiar = () => {
    console.log('Holaaaa');
    setClima(!clima);
  };

  if (clima) {
    return (
      <View style={styles.app}>
        <ClimaMain />
      </View>
    );
  } else {
    return (
      <ScrollView style={clima ? styles.appScroll : {}}>
        <Criptomoneda />
      </ScrollView>
    );
  }

};

const styles = StyleSheet.create({
  appScroll: {
    flex: 1,
  },
  app: {
    flex: 1,
    backgroundColor: 'rgb(71, 149, 212)',
    justifyContent: 'center',
    paddingHorizontal: '2.5%',
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

export default App;

import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, AsyncStorage } from 'react-native';

function define(chave, valor) {
  AsyncStorage.setItem(chave, valor);
}

function remove(chave) {
  console.log('remove key: ' + chave);
  AsyncStorage.removeItem(chave);
}

async function obtem(chave) {
  return AsyncStorage.getItem(chave);
}

async function montaObjeto(chave) {
  const valor = await AsyncStorage.getItem(chave);
  return {
    chave: chave,
    valor: valor
  };
}

export default function App() {
  const [key, setKey] = useState();
  const [value, setValue] = useState();
  const [entradas, setEntradas] = useState([]);
  
async function defineEntradas() {
  const chaves = await AsyncStorage.getAllKeys();
  console.log(chaves);
  const objetos = await Promise.all(chaves.map(montaObjeto));
  console.log(objetos);
  setEntradas(objetos);
}

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, marginVertical: 20,}}>Ilustra operações com AsyncStorage</Text>
      <View style={styles.entrada}>
        <TextInput style={styles.entradaItem} placeholder='chave' onChangeText={text => setKey(text)} value={key} />
        <TextInput style={styles.entradaItem} placeholder='value' onChangeText={text => setValue(text)} value={value} />
      </View>
      <View style={styles.botoes}>
        <Button style={{marginVertical: 5}} title='define' onPress={() => define(key, value)} />
        <Button title='remove' onPress={() => remove(key)} />
        <Button title='exibe' onPress={defineEntradas} />
        </View>
      <View style={styles.saida}>
        {entradas.map(item => <View style={{flexDirection: 'row'}}><Text>{item.chave}:</Text><Text>{item.valor}</Text></View>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginVertical: 5,
  },

  botoes: {
    marginVertical: 20,
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-around',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  entrada: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline'
  },

  entradaItem: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },

  item: {
    marginVertical: 15,
  },

  saida: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
  }
});

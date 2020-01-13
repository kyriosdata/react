import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Botao from './Botao';

export default function App() {
  return (
    <View style={styles.container}>
      <Botao onPress={() => {Alert.alert('clicou no botão')}} title="Meu botão"  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

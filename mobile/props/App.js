import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Entrada from './components/Entrada';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Componente configurado com propriedades repassados por ancestral</Text>

      {/* secureTextEntry repassado para TextInput via {...props} */}
      {/* Estilo fornecido é recebido via style={{...styles.x, ...props.style}} */}
      {/* O único valor relevante para estilo é 'padrao', qualquer outro exibe texto. */}
      <Entrada style={styles.entrada}  secureTextEntry={true} estilo="padrao" />
      
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

  entrada: {
    width: 70,
    height: 30,
    backgroundColor: 'yellow',
  },
});

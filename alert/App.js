import React, { useState } from 'react';
import { StyleSheet, Text, Button, Alert, View } from 'react-native';

export default function App() {

  const [resultado, setResultado] = useState('');

  function alerta() {
    Alert.alert(
      'Título da caixa',
      'Uma mensagem que detalha o contexto',
      [{ text: 'OK', style: 'destructive', onPress: () => setResultado('OK')},
      { text: 'Cancela', style: 'cancel', onPress: () => setResultado('Cancela')},
      { text: 'E agora?', style: 'destructive', onPress: () => setResultado('E agora?')}]
    );
  }

  let extra;
  
  if (resultado != '') {
    extra = <Text>O usuário optou por {resultado}</Text>;
  }

  return (
    <View style={styles.container}>
      <Button title='Abra uma caixa de alerta!' onPress={alerta} />
      <Text>{extra}</Text>
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

import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function App() {

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
      <Text>Exiba ou oculte o keyboard</Text>
      <TextInput 
        autofocus={true} style={styles.entrada} placeholder='sua entrada aqui' keyboardType='number-pad' />
      <Button title='Feche' onPress={ () => Keyboard.dismiss()} />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  botao: {
    width: 50,
  },

  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },

  entrada: {
    width: 100,
    height: 30,
    backgroundColor: 'yellow',
    marginTop: 20,
  },
});

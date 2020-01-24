import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

export default TelaA = props => {
  const [cor, setCor] = useState('');

  function Botoes() {
    return (
      <View style={styles.botoes}>
        <Button title="Vá para Cor"
          onPress={() => props.navigation.navigate({ routeName: "B" })}
        />

        <Button
          title="Vá para Número"
          onPress={() => props.navigation.navigate({ routeName: "B" })}
        />
      </View>
    );
  }

  const Entradas = (props) => {
    return (
      <View style={styles.entradas}>
        <Text>Minha cor preferida é</Text>
        <TextInput style={styles.entrada}
          onChangeText={texto => setCor(texto)}
          value={cor}
        />

        <Text>Meu número preferido:</Text>
        <TextInput style={styles.entrada}
          onChangeText={texto => setCor(texto)}
          value={cor}
        />
      </View>
    );
  }

  return (
    <View style={styles.principal}>
      <Entradas />
      <Botoes />
    </View>
  );
};

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  entradas: {
    alignItems: 'center',
  },

  entrada: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginVertical: 20,
    width: 100,
  },

  botoes: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem-vindo!</Text>
      <Text style={styles.caixa}>
        Nosso segundo exemplo possui um título com tamanho e cor específicos,
        assim como algumas especificidades na configuração desta caixa.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center"
  },

  texto: {
    color: "white",
    fontSize: 25
  },

  caixa: {
    margin: 15,
    padding: 10,
    backgroundColor: "white",
    textAlign: "center"
  }
});

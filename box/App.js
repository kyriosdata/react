import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Uma caixa" />
      <Text>Você pode escolher</Text>
      <View style={styles.caixa}>
        <Text>Pressione um dos botões</Text>
        <TextInput style={styles.entrada} placeholder="forneça um texto" />
        <View style={styles.botoesConteinerexpo }>
          <View style={styles.botao}>
            <Button title="esquerda" />
          </View>
          <View style={styles.botao}>
            <Button title="direita" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  caixa: {
    width: "90%",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    borderWidth: 1
  },

  entrada: {
    width: "70%",
    height: 40,
    backgroundColor: "white",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 10
  },

  botoesConteiner: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly"
  },

  container: {
    flex: 1,
    alignItems: "center"
  },

  botao: {
    width: "30%",
    elevation: 7
  }
});

import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Uma caixa" />
      <Text style={styles.destaque}>Exemplo de caixa (box)</Text>
      <View style={styles.caixa}>
        <Text style={styles.titulo}>Título da caixa</Text>
        <TextInput style={styles.entrada} placeholder="forneça um texto" />
        <View style={styles.botoesConteiner}>
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
  destaque: {
    fontSize: 18
  },
  caixa: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    borderRadius: 6,
    elevation: 2
  },

  entrada: {
    width: "70%",
    height: 40,
    backgroundColor: "white",
    borderBottomColor: "grey",
    borderBottomWidth: 1
  },

  botoesConteiner: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-around",
    marginVertical: 25
  },

  container: {
    flex: 1,
    alignItems: "center"
  },

  botao: {
    width: 90
  },

  titulo: {
    fontSize: 17,
    fontWeight: "bold",
    marginVertical: 10
  }
});

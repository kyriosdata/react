import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Header from "./components/Header";
import Caixa from "./components/Caixa";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Uma caixa" />
      <Text style={styles.destaque}>Exemplo de caixa (box)</Text>
      <Caixa title="Título da caixa" style={styles.caixa}>
        <TextInput style={styles.entrada} placeholder="forneça um texto" />
        <View style={styles.botoesConteiner}>
          <View style={styles.botao}>
            <Button title="esquerda" onPress={() => {}} />
          </View>
          <View style={styles.botao}>
            <Button title="direita" onPress={() => {}} />
          </View>
        </View>
      </Caixa>
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
    justifyContent: "center"
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
  }
});

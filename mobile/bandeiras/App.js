import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ListaEstadosBrasileiros from "./ListaEstadosBrasileiros";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text>Estados Brasileiros</Text>
      </View>
      <View style={styles.conteudo}>
        <ListaEstadosBrasileiros />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },

  cabecalho: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "yellow",
    borderWidth: 1,
    borderBottomColor: "lightgrey",
    paddingBottom: 20
  },

  conteudo: {
    flex: 9,
  }
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";

function vermelha() {
  return (
    <View style={styles.red}>
      <Text style={styles.numero}>1</Text>
    </View>
  );
}

function verde() {
  return (
    <View style={styles.green}>
      <Text style={styles.numero}>2</Text>
    </View>
  );
}

const azul = () => (
  <View style={styles.blue}>
    <Text style={styles.numero}>3</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      {vermelha()}
      {verde()}
      {azul()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around"
  },

  red: {
    backgroundColor: "red",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  green: {
    backgroundColor: "green",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  blue: {
    backgroundColor: "blue",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },

  numero: {
    fontSize: 23,
    fontWeight: "bold",
    color: "white"
  }
});

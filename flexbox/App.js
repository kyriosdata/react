import React from "react";
import { StyleSheet, Text, View } from "react-native";

function vermelha() {
  return <View style={styles.red}></View>;
}

function verde() {
  return <View style={styles.green}></View>;
}

const azul = () => <View style={styles.blue}></View>;

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
    alignItems: "center",
    justifyContent: "center"
  },

  red: {
    backgroundColor: "red",
    width: 100,
    height: 100
  },
  green: {
    backgroundColor: "green",
    width: 100,
    height: 100
  },
  blue: {
    backgroundColor: "blue",
    width: 100,
    height: 100
  }
});

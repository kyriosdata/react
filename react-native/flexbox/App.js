import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

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
  const [flexDirection, setFlexDirection] = useState("column");
  const [reverse, setReverse] = useState("");

  const fullName = (d, r) => d + r;
  const reverseName = () => (reverse !== "" ? "normal" : "reverse");

  const changeDirection = direction => {
    setFlexDirection(fullName(direction, reverse));
    console.log(flexDirection);
  };

  const changeReverse = () => {
    const row = flexDirection.startsWith("row");
    const sufixo = reverse === "" ? "-reverse" : "";
    const direcao = row ? "row" : "column";
    setReverse(sufixo);
    setFlexDirection(fullName(direcao, sufixo));
  };

  return (
    <View style={styles.container}>
      <View style={[styles.work, { flexDirection: flexDirection }]}>
        {vermelha()}
        {verde()}
        {azul()}
      </View>
      <View style={styles.opcoes}>
        <Text style={styles.info}>flexDirection : {flexDirection}</Text>
        <View style={styles.botoes}>
          <Button title="row" onPress={() => changeDirection("row")} />
          <Button title="column" onPress={() => changeDirection("column")} />
          <TouchableOpacity
            style={styles.botaoReverse}
            onPress={() => changeReverse()}
          >
            <Text>{reverseName()}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    fontSize: 20,
    textAlign: "center",
    padding: 20
  },

  botoes: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },

  botaoReverse: {
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 15
  },

  opcoes: {},

  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  work: {
    height: "60%",
    borderWidth: 1,
    borderColor: "grey",
    margin: 35
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

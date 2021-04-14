import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

function getOrientacao() {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  return width < height ? "portrait" : "landscape";
}

export default function App() {
  const [orientacao, setOrientacao] = useState(getOrientacao());

  function dimensionsChangeHandler() {
    setOrientacao(getOrientacao());
  }

  Dimensions.addEventListener("change", dimensionsChangeHandler);

  const estilo = orientacao == 'portrait' ? styles.portrait : styles.landscape;

  return (
    <View style={styles.container}>
      <Text style={styles.aviso}>
        É preciso alterar a propriedade "orientation" para o valor 'default' no
        arquivo app.json.
      </Text>
      <Text style={estilo}>{orientacao.toUpperCase()}</Text>
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

  portrait: {
    fontSize: 30
  },

  landscape: {
    fontSize: 33,
    fontWeight: 'bold',
  },

  aviso: {
    backgroundColor: 'yellow',
    margin: 10,
    padding: 10,
    marginVertical: 30,
  }
});

import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [texto, setTexto] = useState("");
  const [linhas, setLinhas] = useState([]);

  const textHandler = entrada => {
    setTexto(entrada);
    console.log(entrada);
  };

  const adiconaHandler = () => {
    if (texto === "") {
      return;
    }

    setLinhas(linhasCorrente => [...linhasCorrente, texto]);
    setTexto("");
    console.log(linhas);
  };

  return (
    <View style={styles.container}>
      <View style={styles.linhaEntrada}>
        <TextInput
          style={styles.textoEntrada}
          placeholder="texto aqui"
          onChangeText={textHandler}
          value={texto}
        />
        <Button title="Adiciona" onPress={adiconaHandler} />
      </View>
      <View style={styles.saida}>
        {linhas.map(linha => (
          <Text key={linha} style={styles.item}>
            {linha}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 18
  },

  linhaEntrada: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10
  },

  textoEntrada: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 150
  },

  saida: {
    flex: 1,
    width: 300,
    alignItems: "flex-start",
    backgroundColor: "yellow",
    padding: 5
  },

  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 40
  }
});

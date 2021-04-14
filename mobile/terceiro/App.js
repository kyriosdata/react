import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [hora, setHora] = useState(
    "Clique no botão para obter a hora corrente"
  );

  const [total, setTotal] = useState(0);

  function mensagem() {
    return total > 0 ? (
      <Text style={styles.contador}>{total} vezes</Text>
    ) : (
      <Text>Vou contar quantas vezes você clicar...</Text>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.botao}>{hora}</Text>
      <Button
        title="Hora certa"
        onPress={() => {
          setHora(Date());
          setTotal(total + 1);
        }}
      />

      {mensagem()}
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

  botao: {
    marginBottom: 25
  },

  contador: {
    marginTop: 25,
    fontSize: 25
  }
});

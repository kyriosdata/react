import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";

export default function App() {
  const [starting, setStarting] = useState(true);

  function warmUp() {
    // Promise que será resolvida 5s após iniciada.
    // (simula 'longa' execução de atividades iniciais)
    // (observe que a execução é assíncrona)
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve("ok");
      }, 5000);
    });
  }

  if (starting) {
    return (
      <AppLoading
        startAsync={warmUp}
        onFinish={() => {
          setStarting(false);
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text>Aplicativo iniciado</Text>
      <Text>Exibido após inicialização concluída</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default Configuracao = props => {
  return (
    <View style={styles.tela}>
      <Text style={styles.identificacao}>CONFIGURAÇÃO (drawer)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow"
  },

  identificacao: {
    fontSize: 25,
    fontWeight: "bold"
  }
});

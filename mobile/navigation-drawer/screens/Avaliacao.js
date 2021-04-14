import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default Avaliacao = props => {
  return (
    <View style={styles.tela}>
      <Text style={styles.identificacao}>AVALIAÇÃO (drawer)</Text>
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

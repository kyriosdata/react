import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default Favoritos = props => {
  return (
    <View style={styles.tela}>
      <Text style={styles.identificacao}>FAVORITOS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  identificacao: {
    fontSize: 25,
    fontWeight: "bold"
  }
});

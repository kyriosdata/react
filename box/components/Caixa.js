import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Caixa = props => {
  return (
    <View style={styles.caixa}>
      <Text style={styles.titulo}>{props.title}</Text>
      {props.children}
    </View>
  );
};

export default Caixa;

const styles = StyleSheet.create({
  caixa: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    borderRadius: 6,
    elevation: 2
  },

  titulo: {
    fontSize: 17,
    fontWeight: "bold",
    marginVertical: 10
  }
});

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Caixa(props) {
  return (
    <View style={{ ...styles.caixa, ...props.style }}>
      <Text style={styles.titulo}>{props.title}</Text>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  caixa: {
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
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

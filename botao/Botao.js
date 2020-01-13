import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function Botao(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.botaoView}>
        <Text style={styles.botaoTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botaoView: {
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "steelblue",
    borderRadius: 7,
    padding: 10
  },

  botaoTitle: {
    fontSize: 20,
    color: "white"
  }
});

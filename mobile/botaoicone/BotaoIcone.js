import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function BotaoIcone(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.botaoIcone}>
        <FontAwesome name="cloud-upload" size={23} color="white" />
        <Text style={styles.botaoTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botaoIcone: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 13,
    backgroundColor: "steelblue",
    alignItems: "center",
    borderRadius: 6
  },

  botaoTitle: {
    color: "white",
    fontSize: 16,
    marginLeft: 10
  }
});

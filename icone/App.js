import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ilustra dois ícones</Text>
      <Text style={styles.destaque}>md-trash</Text>
      <Ionicons name="md-trash" size={25} color="blue" />

      <Text style={styles.destaque}>ios-trash</Text>
      <Ionicons name="ios-trash" size={25} color="blue" />

      <Text>md-trash (se Android) ou ios-trash (se iOS)</Text>
      <Ionicons
        name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
        size={25}
        color="blue"
      />
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

  destaque: {
    fontWeight: "bold",
    fontSize: 25
  }
});

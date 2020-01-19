import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navegacao from "./screens/Navegacao";

export default function App() {
  return <Navegacao />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

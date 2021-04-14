import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import BotaoIcone from "./BotaoIcone";

export default function App() {
  return (
    <View style={styles.container}>
      <BotaoIcone
        title="Upload"
        onPress={() => Alert.alert("Clicou no botão")}
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
  }
});

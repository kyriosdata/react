import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Opcoes from "./Opcoes";

function funcaoA() {
  console.log("A");
}

function funcaoB() {
  console.log("B");
}

export default Selecao = props => {
  return (
    <View style={styles.selecao}>
      <View style={styles.containerBotoes}>
        <Opcoes onPressA={funcaoA} onPressB={funcaoB} />
      </View>
      <View style={styles.working}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  selecao: {
    flex: 1
  },

  containerBotoes: {
    height: 50
  },

  working: {
    flex: 1,
    backgroundColor: "yellow"
  }
});

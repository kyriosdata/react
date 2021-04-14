import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Opcoes from "./Opcoes";

export default Selecao = props => {
  const [cor, setCor] = useState("yellow");

  function funcaoA() {
    setCor("yellow");
  }

  function funcaoB() {
    setCor("steelblue");
  }

  return (
    <View style={styles.selecao}>
      <View style={styles.containerBotoes}>
        <Opcoes
          onPressA={funcaoA}
          onPressB={funcaoB}
          rotuloA="X"
          rotuloB="Y"
        />
      </View>
      <View style={{ ...styles.working, backgroundColor: cor }}></View>
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
    flex: 1
  }
});

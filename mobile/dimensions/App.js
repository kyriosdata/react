import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function App() {
  const [window, setWindow] = useState(Dimensions.get("window"));
  const [screen, setScreen] = useState(Dimensions.get("screen"));

  return (
    <View style={styles.container}>
      <View style={styles.titulo}>
        <Text style={styles.destaque}>Ocupando 1/3 da área disponível</Text>
      </View>
      <View style={styles.dimensao}>
        <Text
          style={{ ...styles.destaque, ...styles.over }}
        >{`Screen width: ${window.width}`}</Text>
        <Text
          style={{ ...styles.destaque, ...styles.over }}
        >{`Screen height: ${window.height}`}</Text>
        <Text
          style={{ ...styles.destaque, ...styles.over }}
        >{`Window width: ${screen.width}`}</Text>
        <Text
          style={{ ...styles.destaque, ...styles.over }}
        >{`Window height: ${screen.height}`}</Text>
      </View>
      <View style={styles.area}>
        <View style={styles.inside}>
          <Text style={styles.beautiful}>Borda calculada manualmente</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  beautiful: {
    fontSize: 20
  },

  area: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  inside: {
    borderWidth: 1,
    borderColor: "red",
    width: Dimensions.get("window").width - 20,
    height: Dimensions.get("window").height / 4 - 20,
    justifyContent: "center",
    alignItems: "center"
  },

  container: {
    flex: 1
  },

  destaque: {
    fontSize: 19,
    color: "white"
  },

  over: {
    color: "black"
  },

  titulo: {
    flex: 1,
    backgroundColor: "steelblue",
    alignItems: "center",
    justifyContent: "center"
  },

  dimensao: {
    flex: 2,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center"
  }
});

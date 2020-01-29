import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

export default Opcoes = props => {
  return (
    <View style={styles.conteiner}>
      <View style={styles.opcao}>
        <TouchableOpacity onPress={props.onPressA}>
          <View style={styles.botao}>
            <FontAwesome name="check" size={19} />
            <Text style={styles.rotulo}>A</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.divisoria}></View>
      <View style={styles.opcao}>
        <TouchableOpacity onPress={props.onPressB}>
          <View style={styles.botao}>
            <FontAwesome name="exclamation" size={19} />
            <Text style={styles.rotulo}>B</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flexDirection: "row",
    alignItems: "center"
  },

  divisoria: {
    width: 2,
    height: 30,
    backgroundColor: "lightgrey"
  },

  botao: {
    flexDirection: "row"
  },

  rotulo: {
    marginLeft: 20
  },

  opcao: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  }
});

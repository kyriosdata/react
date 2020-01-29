import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

function cor(isSelected) {
  return isSelected ? "black" : "grey";
}

export default Opcoes = props => {
  const [isOpcaoASelecionada, setOpcaoASelecionada] = useState(false);

  const corA = cor(isOpcaoASelecionada);
  const corB = cor(!isOpcaoASelecionada);

  return (
    <View style={styles.conteiner}>
      <View style={styles.opcao}>
        <TouchableOpacity
          onPress={() => {
            setOpcaoASelecionada(true);
            props.onPressA();
          }}
        >
          <View style={styles.botao}>
            <FontAwesome name="check" size={17} color={corA} />
            <Text style={{ ...styles.rotulo, color: corA }}>A</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.divisoria}></View>
      <View style={styles.opcao}>
        <TouchableOpacity
          onPress={() => {
            setOpcaoASelecionada(false);
            props.onPressB();
          }}
        >
          <View style={styles.botao}>
            <FontAwesome name="exclamation" size={17} color={corB} />
            <Text style={{ ...styles.rotulo, color: corB }}>B</Text>
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
    marginLeft: 20,
    color: "grey",
    fontWeight: "bold"
  },

  opcao: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  }
});

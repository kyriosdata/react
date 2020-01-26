import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { actionDefineCorPreferida } from "../state/actions/defineCor";
import { actionDefineNumeroPreferido } from "../state/actions/defineNumero";

export default TelaA = props => {
  function Botoes() {
    return (
      <View style={styles.botoes}>
        <Button
          title="Vá para Cor"
          onPress={() => props.navigation.navigate({ routeName: "B" })}
        />

        <Button
          title="Vá para Número"
          onPress={() => props.navigation.navigate({ routeName: "C" })}
        />
      </View>
    );
  }

  const dispatch = useDispatch();

  const novaCor = texto => {
    dispatch(actionDefineCorPreferida(texto));
  };

  const novoNumero = valor => {
    dispatch(actionDefineNumeroPreferido(valor));
  };

  return (
    <View style={styles.principal}>
      <View style={styles.entradas}>
        <View>
          <Text>Cor preferida:</Text>
          <TextInput style={styles.entrada} onChangeText={n => novaCor(n)} />
        </View>

        <View>
          <Text>Número preferido:</Text>
          <TextInput
            style={styles.entrada}
            keyboardType="numeric"
            onChangeText={novoNumero}
          />
        </View>
      </View>
      <Botoes />
    </View>
  );
};

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  entradas: {
    alignItems: "center"
  },

  entrada: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginVertical: 20,
    width: 100
  },

  botoes: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    marginTop: 20
  }
});

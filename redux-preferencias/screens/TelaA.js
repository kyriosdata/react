import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { actionDefineCorPreferida } from "../state/actions/defineCor";
import { actionDefineNumeroPreferido } from "../state/actions/defineNumero";
import { useSelector } from "react-redux";

export default TelaA = props => {
  console.log("rerendering TelaA...");
  const preferenciasCorrente = useSelector(state => state.preferencias);
  const corSelecionada = preferenciasCorrente.preferida;
  const numeroSelecionado = preferenciasCorrente.numero;

  const gotoCor = () => {
    props.navigation.navigate({
      routeName: "B",
      params: {
        corCorrente: corSelecionada
      }
    });
  };

  const gotoNumber = () => {
    props.navigation.navigate({
      routeName: "C",
      params: { numeroCorrente: numeroSelecionado }
    });
  };

  const dispatch = useDispatch();

  const novaCor = texto => {
    // setCor(texto);
    dispatch(actionDefineCorPreferida(texto));
  };

  const novoNumero = valor => {
    // setNumero(valor);
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
      <View style={styles.botoes}>
        <Button title="Vá para Cor" onPress={gotoCor} />
        <Button title="Vá para Número" onPress={gotoNumber} />
      </View>
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

import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import {
  actionDefineCorPreferida,
  actionDefineNumeroPreferido
} from "../reducer";

export default TelaA = props => {
  const [cor, setCor] = useState("");
  const [numero, setNumero] = useState();

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
    console.log("Nova cor: " + texto);
    setCor(texto);
    dispatch(actionDefineCorPreferida(texto));
  };

  const novoNumero = valor => {
    console.log("Novo número: " + valor);
    setNumero(valor);
    dispatch(actionDefineNumeroPreferido(valor));
  };

  return (
    <View style={styles.principal}>
      <View style={styles.entradas}>
        <View>
          <Text>Cor preferida:</Text>
          <TextInput
            style={styles.entrada}
            onChangeText={novaCor}
            value={cor}
          />
        </View>

        <View>
          <Text>Número preferido:</Text>
          <TextInput
            style={styles.entrada}
            keyboardType="numeric"
            onChangeText={novoNumero}
            value={numero}
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

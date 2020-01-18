import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default SegundaTela = props => {
  const keyValue = props.navigation.getParam("key");

  return (
    <View style={styles.screen}>
      <Text>Segunda</Text>
      <Text>{keyValue}</Text>
      <Button
        title="Ir para terceira"
        onPress={() => props.navigation.navigate({ routeName: "Terceira" })}
      />
    </View>
  );
};

/**
 * Pode ser um simples objeto, conforme demais telas, ou uma
 * função que retorna o mesmo simples objeto. Neste último,
 * caso, por outro lado, podemos alterar o header.
 */
SegundaTela.navigationOptions = navigationData => {
  const keyValue = navigationData.navigation.getParam("key");
  const fonteSizeSorteado = parseInt(Math.random() * 25);

  return {
    headerTitle: "Parâmetro fornecido: " + keyValue,
    headerTitleStyle: {
      fontSize: fonteSizeSorteado < 10 ? 10 : fonteSizeSorteado
    }
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

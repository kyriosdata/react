import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";

export default TelaB = props => {
  const preferenciasCorrente = useSelector(state => state.preferencias);
  const cor = preferenciasCorrente.preferida;
  const numero = preferenciasCorrente.numero;

  console.log("useSelector cor recuperada: " + cor);
  return (
    <View style={{ ...styles.principal, backgroundColor: cor }}>
      <Text>A cor preferida chama-se {cor}</Text>
      <Button
        title="Vá para C"
        onPress={() =>
          props.navigation.navigate({
            routeName: "Numero",
            params: { numeroCorrente: numero }
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

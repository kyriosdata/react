import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";

export default TelaB = props => {
  const cor = useSelector(state => state.preferencias.preferida);
  console.log("useSelector cor recuperada: " + cor);
  return (
    <View style={{ ...styles.principal, backgroundColor: cor }}>
      <Text>A cor preferida chama-se {cor}</Text>
      <Button
        title="Vá para C"
        onPress={() => props.navigation.navigate({ routeName: "C" })}
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

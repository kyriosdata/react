import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";

export default CorScreen = props => {
  const preferenciasCorrente = useSelector(state => state.preferencias);

  return (
    <View style={{ ...styles.principal, backgroundColor: preferenciasCorrente.preferida }}>
      <Text>A cor preferida chama-se {preferenciasCorrente.preferida}</Text>
      <Button
        title="Número"
        onPress={() =>
          props.navigation.navigate({
            routeName: "Numero",
            params: { numeroCorrente: preferenciasCorrente.numero }
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

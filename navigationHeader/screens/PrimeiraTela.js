import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default PrimeiraTela = props => {
  return (
    <View style={styles.screen}>
      <Text>Primeira</Text>
      <Button
        title="Ir para segunda"
        onPress={() =>
          props.navigation.navigate({
            routeName: "Segunda",
            params: { key: "12345" }
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

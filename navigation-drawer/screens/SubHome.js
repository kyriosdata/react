import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default SubHome = props => {
  return (
    <View style={styles.tela}>
      <Text style={styles.identificacao}>SUB home (segunda)</Text>
      <Button
        title="Ir para terceira"
        onPress={() => {
          props.navigation.navigate({ routeName: "SubHome" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  identificacao: {
    fontSize: 25,
    fontWeight: "bold"
  }
});

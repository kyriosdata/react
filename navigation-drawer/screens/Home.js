import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default Home = props => {
  return (
    <View style={styles.tela}>
      <Text style={styles.identificacao}>Tela Principal</Text>
      <Button
        title="Ir para secundária"
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
    alignItems: "center",
    backgroundColor: "steelblue"
  },

  identificacao: {
    fontSize: 25,
    fontWeight: "bold"
  }
});

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default TabUm = props => {
  return (
    <View style={styles.tela}>
      <Text>TAB UM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

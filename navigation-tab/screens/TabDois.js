import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default TabDois = props => {
  return (
    <View style={styles.tela}>
      <Text>TAB DOIS</Text>
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

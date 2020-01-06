import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    paddingTop: 36,
    backgroundColor: "steelblue",
    alignItems: "center"
  },

  title: {
    fontSize: 19,
    color: "yellow"
  }
});

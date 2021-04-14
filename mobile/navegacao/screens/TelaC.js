import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default TelaC = props => {
  return (
    <View style={styles.principal}>
      <Text>Tela C</Text>
      <Button
        title="Vá para A"
        onPress={() => props.navigation.navigate({ routeName: "A" })}
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

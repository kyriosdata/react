import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default TelaA = props => {
  console.log(props);

  return (
    <View style={styles.principal}>
      <Text>Tela A</Text>
      <Button
        title="Vá para B"
        onPress={() => props.navigation.navigate({ routeName: "B" })}
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

import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default TelaB = props => {
  return (
    <View style={styles.principal}>
      <Text>Tela B</Text>
          <Button title="Vá para C" onPress={() => props.navigation.navigate({ routeName: "C" })} />
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

import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

export default TelaA = props => {
  const [cor, setCor] = useState('');

  return (
    <View style={styles.principal}>
      <Text>Minha cor preferida é:</Text>
      <TextInput style={styles.entrada}
        onChangeText={texto => setCor(texto)}
        value={cor}
      />

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
  },

  entrada: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginVertical: 20,
    width: 100,
  }
});

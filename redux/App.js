import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStore } from "redux";

function counter(state = 0, action) {
  switch (action.type) {
    case "ADICIONA":
      return state + 1;
    case "SUBTRAI":
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(counter);

export default function App() {
  console.log("rendering...");
  const [contador, setContador] = useState(store.getState());

  store.subscribe(() => setContador(store.getState()));

  return (
    <View style={styles.container}>
      <Text>Selecione uma operação</Text>
      <View style={styles.linhaBotoes}>
        <Button
          title="ADICIONA"
          onPress={() => store.dispatch({ type: "ADICIONA" })}
        />
        <Button
          title="SUBTRAI"
          onPress={() => store.dispatch({ type: "SUBTRAI" })}
        />
      </View>

      <View>
        <Text style={styles.resultado}>{contador}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  linhaBotoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200
  },

  resultado: {
    fontSize: 66,
    fontWeight: "bold",
    marginTop: 45
  }
});

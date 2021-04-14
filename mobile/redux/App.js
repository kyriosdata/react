import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStore } from 'redux';

/*
  REDUCER. 'state' ou estado inicial é um valor numérico, iniciado com 0. 
  A ação (action) é um objeto que pressupõe o atributo 'type' (simples convenção). 
  A cada execução do reducer um novo estado é produzido e retornado. 
*/
function counter(state = 0, action) {
  switch (action.type) {
    case 'ADICIONA':
      return state + 1;
    case 'SUBTRAI':
      return state - 1;
    default:
      return state;
  }
}

// Todo o estado da aplicação
let store = createStore(counter);

const action = tipo => store.dispatch({ type: tipo });

export default function App() {
  const [contador, setContador] = useState(store.getState());

  // Registra função a ser chamada toda vez que houver mudança de estado
  // Neste caso, a função altera a variável 'contador' que força redraw.
  store.subscribe(() => setContador(store.getState()));

  return (
    <View style={styles.container}>
      <Text>Selecione uma operação</Text>
      <View style={styles.linhaBotoes}>
        <Button title="ADICIONA" onPress={action.bind(this, 'ADICIONA')} />
        <Button title="SUBTRAI" onPress={action.bind(this, 'SUBTRAI')} />
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  linhaBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },

  resultado: {
    fontSize: 66,
    fontWeight: 'bold',
    marginTop: 45,
  },
});

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

export default function Contador(props) {
  const dispatch = useDispatch();

  const adiciona = () => dispatch({ type: 'ADICIONA' });
  const subtrai = () => dispatch({ type: 'SUBTRAI' });

  let valor = useSelector(state => state);

  return (
    <View style={styles.container}>

      <View style={styles.linhaBotoes}>
        <Button title="ADICIONA" onPress={adiciona} />
        <Button title="SUBTRAI" onPress={subtrai} />
      </View>

      <Text style={styles.resultado}>{valor}</Text>
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

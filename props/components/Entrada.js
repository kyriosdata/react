import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

/**
 * Componente que recebe propriedades fornecidas e as repassa para elemento
 * interno por meio da construção {...props}, ilustrada abaixo. 
 * 
 * Adicionalmente, o que é fornecido por meio de "style" também é utilizado
 * para a definição do componente interno.
 * 
 * @param {props} props 
 */
export default function Entrada(props) {
    if (props.estilo === 'padrao') {
        return (
            <TextInput {...props} style={{...styles.entrada, ...props.style}} />
        );
    }
    
    return (<Text>O estilo não é 'padrão'.</Text>);
}

// Apenas borda inferior na cor preta. Demais características são
// "heradadas" do componente 'pai'. 
const styles = StyleSheet.create({
    entrada : {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
});
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions
} from "react-native";

/**
 * Uma imagem em domínio público (wikimedia)
 * Chegada dos portugueses em Porto Seguro
 */
const URI =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Desembarque_de_Pedro_%C3%81lvares_Cabral_em_Porto_Seguro_em_1500_by_Oscar_Pereira_da_Silva_%281865%E2%80%931939%29.jpg/1280px-Desembarque_de_Pedro_%C3%81lvares_Cabral_em_Porto_Seguro_em_1500_by_Oscar_Pereira_da_Silva_%281865%E2%80%931939%29.jpg";

/**
 * Dimensões da imagem
 */
const LARGURA = 1280;
const ALTURA = 828;
const ESCALA = LARGURA / ALTURA;

export default function App() {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const setLargura = largura => {
    const maximo = Dimensions.get("window").width * 0.9;
    const novaLargura = largura >= maximo ? maximo : largura;
    setWidth(novaLargura);
    setHeight(novaLargura / ESCALA);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Button title="50" onPress={() => setLargura(50)} />
        <Button title="100" onPress={() => setLargura(100)} />
        <Button title="200" onPress={() => setLargura(200)} />
        <Button title="400" onPress={() => setLargura(400)} />
      </View>
      <View style={styles.trabalho}>
        <Image
          style={{
            width: width,
            height: height,
            borderRadius: 7,
            borderWidth: 2,
            borderColor: "grey"
          }}
          source={{
            uri: URI
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  cabecalho: {
    flexDirection: "row",
    height: "15%",
    marginBottom: 5,
    padding: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    alignItems: "flex-end",
    justifyContent: "space-between"
  },

  trabalho: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

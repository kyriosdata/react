import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

const OK = "https://facebook.github.io/react-native/img/tiny_logo.png";
const ERRO = "https://facebook.github.io/imagem.jpz";

export default function App() {
  const [termino, setTermino] = useState("");
  const [falha, setFalha] = useState("");
  const [uri, setUri] = useState(OK);

  const onLoadEndHandler = () => setTermino("Carregamento concluído");
  const onErrorHandler = erro => setFalha("Ocorreu uma falha");

  function recarrega(uri) {
    setUri(uri);
    setFalha("");
    setTermino("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text>Requisita carregamento de imagem...</Text>
        <View style={styles.botoes}>
          <Button title="ERRO" onPress={() => recarrega(ERRO)} />
          <Button title="OK" onPress={() => recarrega(OK)} />
        </View>
      </View>
      <View style={styles.bloco}>
        <Text>{termino}</Text>
        <Text>{falha}</Text>
        <Image
          style={{
            width: 50,
            height: 50,
            borderWidth: 2,
            borderColor: "yellow"
          }}
          source={{ uri: uri }}
          onLoadEnd={onLoadEndHandler}
          onError={onErrorHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  botoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "70%",
    marginTop: 15
  },

  cabecalho: {
    flex: 1,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  bloco: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  }
});

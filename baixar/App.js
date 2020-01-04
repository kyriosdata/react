import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Button,
  ActivityIndicator
} from "react-native";

function download(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "text";
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(this.status, this.responseText);
    }
  };
  xhr.send();
}

export default function App() {
  const [atividade, setAtividade] = useState(false);
  const [conteudo, setConteudo] = useState([]);
  const [refresh, setRefresh] = useState(false);

  function limpaLista() {
    setRefresh(!refresh);
    setConteudo([]);
  }

  function feedback(codigo, dados) {
    const medicamentos = JSON.parse(dados);
    console.log(medicamentos.length);
    console.log(medicamentos[0]);
    setConteudo(medicamentos);
    setAtividade(false);
  }

  function baixeArquivo() {
    setAtividade(true);
    console.log("baixando...");
    download(
      "https://kyriosdata.github.io/react-native/municipios.json",
      feedback
    );
  }

  function exibeCondicionalmente() {
    if (atividade) {
      return (
        <ActivityIndicator
          style={styles.indicador}
          size="large"
          color="steelblue"
          animating={atividade}
        />
      );
    }

    return (
      <FlatList
        extraData={refresh}
        data={conteudo}
        renderItem={itemData => <Text>{itemData.item.municipio}</Text>}
        keyExtractor={(item, index) => item.codigo.toString()}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <Button title="Limpa lista" onPress={limpaLista} />
        <Button title="download cidades..." onPress={baixeArquivo} />
      </View>
      <View style={styles.saida}>{exibeCondicionalmente()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  entrada: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40
  },

  saida: {
    flex: 1,
    width: "90%",
    marginVertical: 15,
    borderWidth: 1,
    borderColor: "red",
    padding: 8
  },

  indicador: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});

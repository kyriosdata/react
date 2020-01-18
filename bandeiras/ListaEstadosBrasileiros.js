import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const ESTADOS = [
  {
    id: "Acre",
    capital: "Rio Branco",
    img: require("./assets/estados/Acre.jpg")
  },
  {
    id: "Alagoas",
    capital: "Maceió",
    img: require("./assets/estados/Alagoas.jpg")
  },
  {
    id: "Amapá",
    capital: "Macapá",
    img: require("./assets/estados/Amapa.jpg")
  },
  {
    id: "Amazonas",
    capital: "Manaus",
    img: require("./assets/estados/Amazonas.jpg")
  },
  {
    id: "Bahia",
    capital: "Salvador",
    img: require("./assets/estados/bahia.png")
  },
  {
    id: "Distrito Federal",
    capital: "Brasília",
    img: require("./assets/estados/Brasilia.jpg")
  },
  {
    id: "Ceará",
    capital: "Fortaleza",
    img: require("./assets/estados/Ceara.jpg")
  },
  {
    id: "Espírito Santo",
    capital: "Vitória",
    img: require("./assets/estados/Espiritosanto.jpg")
  },
  {
    id: "Goiás",
    capital: "Goiânia",
    img: require("./assets/estados/Goias.jpg")
  },
  {
    id: "Maranhão",
    capital: "São Luis",
    img: require("./assets/estados/Maranhao.jpg")
  },
  {
    id: "Mato Grosso",
    capital: "Cuiabá",
    img: require("./assets/estados/Matogrosso.jpg")
  },
  {
    id: "Mato Grosso do Sul",
    img: require("./assets/estados/Matogrossodosul.jpg")
  },
  {
    id: "Minas Gerais",
    capital: "Belo Horizonte",
    img: require("./assets/estados/Minasgerais.jpg")
  },
  {
    id: "Pará",
    capital: "Belém",
    img: require("./assets/estados/Para.jpg")
  },
  {
    id: "Paraíba",
    capital: "João Pessoa",
    img: require("./assets/estados/Paraiba.jpg")
  },
  {
    id: "Paraná",
    capital: "Curitiba",
    img: require("./assets/estados/Parana.jpg")
  },
  {
    id: "Pernambuco",
    capital: "Recife",
    img: require("./assets/estados/Pernambuco.jpg")
  },
  {
    id: "Piauí",
    capital: "Teresina",
    img: require("./assets/estados/Piaui.jpg")
  },
  {
    id: "Rio de Janeiro",
    capital: "Rio de Janeiro",
    img: require("./assets/estados/Riodejaneiro.jpg")
  },
  {
    id: "Rio Grande do Norte",
    capital: "Natal",
    img: require("./assets/estados/Riograndedonorte.jpg")
  },
  {
    id: "Rondônia",
    capital: "Porto Velho",
    img: require("./assets/estados/Rondonia.jpg")
  },
  {
    id: "Roraima",
    capital: "Boa Vista",
    img: require("./assets/estados/Roraima.jpg")
  },
  {
    id: "Santa Catarina",
    capital: "Florianópolis",
    img: require("./assets/estados/Santacatarina.jpg")
  },
  {
    id: "São Paulo",
    capital: "São Paulo",
    img: require("./assets/estados/Saopaulo.jpg")
  },
  {
    id: "Sergipe",
    capital: "Aracaju",
    img: require("./assets/estados/Sergipe.jpg")
  },
  {
    id: "Tocantins",
    capital: "Palmas",
    img: require("./assets/estados/Tocantins.jpg")
  }
];

function exibeItem(item) {
  const estado = item.item;
  console.log("exibindo: " + estado.id);

  return (
    <View style={styles.entrada}>
      <View style={styles.viewBandeira}>
        <Image
          resizeMode="contain"
          style={styles.bandeira}
          source={estado.img}
        />
      </View>
      <View style={styles.detalhe}>
        <Text style={styles.estado}>{estado.id}</Text>
        <Text style={styles.capital}>{estado.capital}</Text>
      </View>
    </View>
  );
}

export default ListaEstadosBrasileiros = props => {
  return <FlatList data={ESTADOS} renderItem={exibeItem} />;
};

const styles = StyleSheet.create({
  bandeira: {
    width: "100%",
    height: "100%"
  },

  viewBandeira: {
    width: 100,
    height: 65,
    marginHorizontal: 15
  },

  entrada: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    height: 100
  },

  detalhe: {
    height: "65%"
  },

  capital: {
    fontWeight: "bold"
  },

  estado: {
    fontSize: 18
  }
});

import React from "react";
import {} from "react-native";
import {} from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import NavegacaoBottomTab from "./NavegacaoBottomTab";
import AvaliacaoScreen from "./Avaliacao";
import Configuracao from "./Configuracao";
import Info from "./Info";

const drawer = {
  Home: {
    screen: NavegacaoBottomTab
  },

  Avaliacao: {
    screen: AvaliacaoScreen
  },

  Configuracao: {
    screen: Configuracao
  },

  Info: {
    screen: Info
  }
};

export default createDrawerNavigator(drawer);

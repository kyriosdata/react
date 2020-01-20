import React from "react";
import {} from "react-native";
import {} from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./HeaderButton";

import NavegacaoBottomTab from "./NavegacaoBottomTab";
import AvaliacaoScreen from "./Avaliacao";
import ConfiguracaoScreen from "./Configuracao";
import InfoScreen from "./Info";

import { createStackNavigator } from "react-navigation-stack";

const drawer = {
  Home: {
    screen: NavegacaoBottomTab
  },

  Avaliacao: {
    screen: createStackNavigator({
      Avaliacao: {
        screen: AvaliacaoScreen,
        navigationOptions: navigationData => {
          return {
            headerTitle: "Avaliação",
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName="arrow-back"
                  iconSize={25}
                  onPress={() => {
                    navigationData.navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            )
          };
        }
      }
    })
  },

  Configuracao: {
    screen: createStackNavigator({
      Configuracao: {
        screen: ConfiguracaoScreen,
        navigationOptions: { headerTitle: "Configuração" }
      }
    })
  },

  Info: {
    screen: createStackNavigator({
      Info: {
        screen: InfoScreen,
        navigationOptions: { headerTitle: "Informações" }
      }
    })
  }
};

export default createDrawerNavigator(drawer);

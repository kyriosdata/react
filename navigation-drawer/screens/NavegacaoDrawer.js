import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./HeaderButton";

import NavegacaoBottomTab from "./NavegacaoBottomTab";
import AvaliacaoScreen from "./Avaliacao";
import ConfiguracaoScreen from "./Configuracao";
import InfoScreen from "./Info";

import { createStackNavigator } from "react-navigation-stack";

function menuBack(headerTitle) {
  return navigationData => {
    return {
      headerTitle: headerTitle,
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="arrow-back"
            iconSize={25}
            onPress={() => {
              navigationData.navigation.navigate({ routeName: "Home" });
            }}
          />
        </HeaderButtons>
      )
    };
  };
}

const drawer = {
  Home: {
    screen: NavegacaoBottomTab
  },

  Avaliacao: {
    screen: createStackNavigator({
      Avaliacao: {
        screen: AvaliacaoScreen,
        navigationOptions: menuBack("Avaliação")
      }
    })
  },

  Configuracao: {
    screen: createStackNavigator({
      Configuracao: {
        screen: ConfiguracaoScreen,
        navigationOptions: menuBack("Configuração")
      }
    })
  },

  Info: {
    screen: createStackNavigator({
      Info: {
        screen: InfoScreen,
        navigationOptions: menuBack("Informações")
      }
    })
  }
};

export default createDrawerNavigator(drawer);

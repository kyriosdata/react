import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { AntDesign } from "@expo/vector-icons";

import TabUm from "./TabUm";
import TabDois from "./TabDois";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const opcoesTab = {
  Tab1: {
    screen: TabUm,
    navigationOptions: {
      tabBarLabel: "Upload",
      tabBarIcon: tabInfo => {
        return <AntDesign name="cloudupload" size={25} color="white" />;
      },
      tabBarColor: "brown"
    }
  },
  Tab2: {
    screen: TabDois,
    navigationOptions: {
      tabBarLabel: "Download",
      tabBarIcon: info => {
        return <AntDesign name="eye" size={25} color="white" />;
      },
      tabBarColor: "steelblue"
    }
  }
};

const bottomTabNavigator = createBottomTabNavigator(opcoesTab, {
  tabBarOptions: {
    activeTintColor: "blue",
    activeBackgroundColor: "yellow",
    inactiveBackgroundColor: "lightgrey",
    labelStyle: {
      fontWeight: "bold",
      fontSize: 11
    }
  },
  defaultNavigationOptions: {
    tabBarLabel: "NAO FORNECIDO"
  }
});

const materialBottomTabNavigator = createMaterialBottomTabNavigator(opcoesTab, {
  activeTintColor: "red",
  shifting: true
});

//

export default createAppContainer(
  Platform.OS === "android" ? materialBottomTabNavigator : bottomTabNavigator
);

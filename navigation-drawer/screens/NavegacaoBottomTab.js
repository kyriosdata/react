import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Entypo } from "@expo/vector-icons";

import Favoritos from "./Favoritos";
import Notas from "./Notas";

const tabs = {
  Tab1: {
    screen: Favoritos,
    navigationOptions: {
      tabBarLabel: "Google Play",
      tabBarIcon: info => {
        return <Entypo name="google-play" size={25} />;
      },
      tabBarColor: "beige"
    }
  },

  Tab2: {
    screen: Notas,
    navigationOptions: {
      tabBarLabel: "Apple Store",
      tabBarIcon: info => {
        return <Entypo name="app-store" size={25} />;
      },
      tabBarColor: "cyan"
    }
  }
};

export default Platform.OS === "ios"
  ? createBottomTabNavigator(tabs, {
      defaultNavigationOptions: {
        tabBarLabel: "NÃO FORNECIDO"
      }
    })
  : createMaterialBottomTabNavigator(tabs, {
      activeColor: "red",
      shifting: true
    });

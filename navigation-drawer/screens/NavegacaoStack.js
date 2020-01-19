import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./Home";
import SubHome from "./SubHome";
import SubSubHome from "./SubSubHome";

export default createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: "Principal"
    }
  },
  SubHome: {
    screen: SubHome,
    navigationOptions: {
      headerTitle: "SEGUNDA"
    }
  },
  SubSubHome: {
    screen: SubSubHome,
    navigationOptions: {
      headerTitle: "TERCEIRA"
    }
  }
});

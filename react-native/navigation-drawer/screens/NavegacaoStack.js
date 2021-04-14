import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./HeaderButton";

import Home from "./Home";
import SubHome from "./SubHome";
import SubSubHome from "./SubSubHome";

export default createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: navigationData => {
      return {
        headerTitle: "Principal",
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName="menu"
              iconSize={25}
              onPress={() => {
                navigationData.navigation.toggleDrawer();
              }}
            />
          </HeaderButtons>
        )
      };
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

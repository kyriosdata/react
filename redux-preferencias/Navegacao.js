import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import TelaA from "./screens/TelaA";
import TelaB from "./screens/TelaB";
import TelaC from "./screens/TelaC";

const Navegador = createStackNavigator({
  A: {
    screen: TelaA,
    navigationOptions: {
      headerTitle: "Preferências"
    }
  },
  B: {
    screen: TelaB,
    navigationOptions: navigationData => {
      const corCorrente = navigationData.navigation.getParam("corCorrente");
      return { headerTitle: "COR: " + corCorrente };
    }
  },
  C: {
    screen: TelaC,
    navigationOptions: navigationData => {
      const numeroCorrente = navigationData.navigation.getParam(
        "numeroCorrente"
      );
      return { headerTitle: "Número: " + numeroCorrente };
    }
  }
});

export default createAppContainer(Navegador);

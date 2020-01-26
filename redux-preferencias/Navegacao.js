import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Principal from "./screens/HomeScreen";
import Cor from "./screens/CorScreen";
import Numero from "./screens/NumeroScreen";

const Navegador = createStackNavigator({
  Principal: {
    screen: Principal,
    navigationOptions: {
      headerTitle: "Preferências"
    }
  },
  Cor: {
    screen: Cor,
    navigationOptions: navigationData => {
      const corCorrente = navigationData.navigation.getParam("corCorrente");
      return { headerTitle: "COR: " + corCorrente };
    }
  },
  Numero: {
    screen: Numero,
    navigationOptions: navigationData => {
      const numeroCorrente = navigationData.navigation.getParam(
        "numeroCorrente"
      );
      return { headerTitle: "Número: " + numeroCorrente };
    }
  }
});

export default createAppContainer(Navegador);

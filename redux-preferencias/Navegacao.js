import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./screens/HomeScreen";
import CorScreen from "./screens/CorScreen";
import NumeroScreen from "./screens/NumeroScreen";

/**
 * corCorrente : parâmetro a ser fornecido para a tela Cor
 * numeroCorrente: parâmetro para a tela Numero
 */

const Navegador = createStackNavigator({
  Principal: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: "Preferências"
    }
  },
  Cor: {
    screen: CorScreen,
    navigationOptions: navData => {
      const corrente = navData.navigation.getParam("corCorrente");
      return { headerTitle: "COR: " + corrente };
    }
  },
  Numero: {
    screen: NumeroScreen,
    navigationOptions: navData => {
      const numero = navData.navigation.getParam("numeroCorrente");
      return { headerTitle: "Número: " + numero };
    }
  }
});

export default createAppContainer(Navegador);

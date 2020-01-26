import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Principal from "./screens/HomeScreen";
import Cor from "./screens/CorScreen";
import Numero from "./screens/NumeroScreen";

/**
 * corCorrente : parâmetro a ser fornecido para a tela Cor
 * numeroCorrente: parâmetro para a tela Numero
 */

const Navegador = createStackNavigator({
  Principal: {
    screen: Principal,
    navigationOptions: {
      headerTitle: "Preferências"
    }
  },
  Cor: {
    screen: Cor,
    navigationOptions: navData => {
      const corrente = navData.navigation.getParam("corCorrente");
      return { headerTitle: "COR: " + corrente };
    }
  },
  Numero: {
    screen: Numero,
    navigationOptions: navData => {
      const numero = navData.navigation.getParam("numeroCorrente");
      return { headerTitle: "Número: " + numero };
    }
  }
});

export default createAppContainer(Navegador);

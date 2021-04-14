import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import PrimeiraTela from "./PrimeiraTela";
import SegundaTela from "./SegundaTela";
import TerceiraTela from "./TerceiraTela";

/**
 * Várias configurações de estilo foram fornecidas como
 * padrão.
 */
const stackNavigator = createStackNavigator(
  {
    Primeira: {
      screen: PrimeiraTela,
      navigationOptions: { title: "Primeira tela (ok)" }
    },
    Segunda: { screen: SegundaTela },
    Terceira: {
      screen: TerceiraTela,
      navigationOptions: {
        title: "Terceira Tela"
      }
    }
  },
  {
    initialRouteName: "Primeira",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "steelblue"
      },
      headerTitleStyle: {
        color: "white",
        fontWeight: "bold"
      }
    }
  }
);

export default createAppContainer(stackNavigator);

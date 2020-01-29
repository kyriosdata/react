import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Selecao from "./SelecaoScreen";

const navegador = createStackNavigator(
  {
    Home: Selecao
  },
  {
    defaultNavigationOptions: {
      title: "Ilustra seleção"
    }
  }
);

export default createAppContainer(navegador);

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import TelaA from "./screens/TelaA";
import TelaB from "./screens/TelaB";
import TelaC from "./screens/TelaC";

const Navegador = createStackNavigator({
  A: { screen: TelaA },
  B: { screen: TelaB },
  C: { screen: TelaC }
});

export default createAppContainer(Navegador);

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import TelaA from "./screens/TelaA";
import TelaB from "./screens/TelaB";
import TelaC from "./screens/TelaC";

const Navegador = createStackNavigator({
  A: {
    screen: TelaA, navigationOptions: {
      headerTitle: 'Preferências'
    }
  },
  B: { screen: TelaB, navigationOptions: { headerTitle: 'Cor preferida' } },
  C: { screen: TelaC, navigationOptions: { headerTitle: 'Número preferido' } }
});

export default createAppContainer(Navegador);

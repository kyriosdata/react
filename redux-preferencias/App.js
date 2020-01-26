import React from "react";
import Navegacao from "./Navegacao";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { preferenciasReducer } from "./state/reducers/preferencias";

/**
 * Permite combinar vários 'reducers', neste caso, apenas um
 * é suficiente (preferencias). O estado correspondente será identificado
 * por 'preferencias', conforme configurado abaixo.
 */
const rootReducer = combineReducers({
  preferencias: preferenciasReducer
});

const store = createStore(rootReducer);

/**
 * O elemento de mais alvo nível deve estar encapsulado pelo
 * componente Provider, fornecido pelo react-redux.
 */
export default function App() {
  return (
    <Provider store={store}>
      <Navegacao />
    </Provider>
  );
}

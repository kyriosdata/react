import React from "react";
import Navegacao from "./Navegacao";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { preferenciasReducer } from "./state/reducers/preferencias";

const rootReducer = combineReducers({ preferencias: preferenciasReducer });
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Navegacao />
    </Provider>
  );
}

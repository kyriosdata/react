import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import contador from "./reducer";
import Contador from "./Contador";

// Todo o estado da aplicação
let store = createStore(contador);

export default function App() {
  return (
    <Provider store={store}>
      <Contador />
    </Provider>
  );
}

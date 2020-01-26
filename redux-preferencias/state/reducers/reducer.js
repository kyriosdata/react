import { COR } from "../actions/DefineCor";
import { NUMERO } from "../actions/DefineNumero";

/**
 * Valores iniciais para as preferências.
 */
const estadoInicial = {
  cor: "steelblue",
  numero: 21
};

/**
 * Reducer que executa a ação encaminhada (dispatch) sobre o
 * estado. Observe que uma cópia do estado é realizada com a
 * atualização desejada, ou seja, trata-se de uma função sem
 * efeito colateral.
 *
 * @param {*} state O estado corrente.
 * @param {*} action A ação a ser executada
 */
export const preferenciasReducer = (state = estadoInicial, action) => {
  switch (action.type) {
    case COR:
      return { ...state, cor: action.preferida };
    case NUMERO:
      return { ...state, numero: action.numero };
    default:
      return state;
  }
};

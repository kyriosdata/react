import { COR } from "../actions/defineCor";
import { NUMERO } from "../actions/defineNumero";

/**
 * Valores iniciais para as preferências, que são definidas por
 * dois atributos: (a) preferida, (b) numero e (c) o tipo da
 * ação.
 *
 * Toda ação, portanto, eventualmente altera estas propriedades.
 * Conforme abaixo, os valores padrão são 'steelblue' e o número
 * 21.
 */
const estadoInicial = {
  preferida: "steelblue",
  numero: 21
};

/**
 * Reducer que executa a ação encaminhada (dispatch) sobre o
 * estado. Observe que uma cópia do estado é realizada com a
 * atualização desejada, ou seja, trata-se de uma função sem
 * efeito colateral, pois o estado fornecido (state), não é
 * alterado pelo reducer.
 *
 * Adicionalmente, 'action' fornecida é um objeto que DEVE
 * possuir, neste exemplo, duas propriedades: (a) type (que
 * identifica o tipo da ação) e (b) 'preferida' ou 'numero',
 * conforme o tipo da ação.
 *
 * @param {*} state O estado corrente.
 * @param {*} action A ação a ser executada
 */
export const preferenciasReducer = (state = estadoInicial, action) => {
  switch (action.type) {
    case COR:
      // Caso recomendado quando há muitas propriedades
      return { ...state, preferida: action.preferida };
    case NUMERO:
      return { preferida: state.preferida, numero: action.numero };
    default:
      return state;
  }
};

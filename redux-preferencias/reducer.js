/**
 * Valores iniciais para as preferências.
 */
const estadoInicial = {
  cor: "steelblue",
  numero: 21
};

/**
 * Identifica tipos (type) das ações possíveis.
 */
const COR = "COR";
const NUMERO = "NUMERO";

/**
 * Action que define nova cor.
 *
 * @param {string} cor Cora a ser definida como corrente.
 */
export const actionDefineCorPreferida = cor => {
  return {
    type: COR,
    preferida: cor
  };
};

/**
 * Action que define novo valor padrão (número armazenado como string).
 *
 * @param {string} numero
 */
export const actionDefineNumeroPreferido = numero => {
  return {
    type: NUMERO,
    numero: numero
  };
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

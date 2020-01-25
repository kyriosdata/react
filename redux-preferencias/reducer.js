const estadoInicial = {
  cor: "steelblue",
  numero: 21
};

const COR = "COR";
const NUMERO = "NUMERO";

export const actionDefineCorPreferida = cor => {
  return {
    type: COR,
    preferida: cor
  };
};

export const actionDefineNumeroPreferido = numero => {
  return {
    type: NUMERO,
    numero: numero
  };
};

export const preferenciasReducer = (state = estadoInicial, action) => {
  switch (action.type) {
    case COR:
      return { ...state, cor: action.preferida };
    case NUMERO:
      return { ...state, numero: action.numero };
    default:
      return state;
  }

  return state;
};

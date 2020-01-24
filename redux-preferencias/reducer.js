const estadoInicial = {
    cor: 'steelblue',
    numero: 21
};

const COR = 'COR';
const NUMERO = 'NUMERO';

export const defineCorPreferida = (cor) => {
    return {
        type: COR,
        preferida: cor,
    };
};

export const reducer = (state = estadoInicial, action) => {
    switch (action.type) {
        case COR:
            return { ...state, cor: action.preferida };
        default:
            return state;
    }
    return state;
};
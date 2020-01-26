/**
 * Identifica tipo de ação que define o número preferido.
 */
export const NUMERO = "NUMERO";

/**
 * Action que define número preferido.
 *
 * @param {string} valor Valor a ser definido como preferido.
 */
export const actionDefineNumeroPreferido = valor => {
  return {
    type: NUMERO,
    numero: valor
  };
};

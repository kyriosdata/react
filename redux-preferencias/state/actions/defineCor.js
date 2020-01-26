/**
 * Identifica tipo de ação que altera cor preferida.
 */
export const COR = "COR";

/**
 * Action que define nova cor.
 *
 * @param {string} cor Cora a ser definida como corrente.
 * Ou seja, a ser atribuída à propriedade 'preferida' do
 * objeto a ser retornado.
 */
export const actionDefineCorPreferida = cor => {
  return {
    type: COR,
    preferida: cor
  };
};

/**
 * Identifica tio de ação que altera cor preferida.
 */
const COR = "COR";

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

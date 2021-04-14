/*
  REDUCER. O estado (state) mantido pela aplicação, neste exemplo,
  é um valor numérico. O valor inicial é 0. 
  A ação (action) é um objeto que pressupõe o atributo 'type' (simples convenção). 
  A cada execução do reducer um novo estado é produzido e retornado. 
*/
export default function contador(state = 0, action) {
  switch (action.type) {
    case "ADICIONA":
      return state + 1;
    case "SUBTRAI":
      return state - 1;
    default:
      return state;
  }
}

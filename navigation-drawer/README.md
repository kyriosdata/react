# Instalação (dependências)

React Navigation é a biblioteca empregada pelo presente projeto.
Há muitos detalhes e a
[documentação](https://reactnavigation.org/docs/en/getting-started.html)
disponível é imprescindível.

Os comandos abaixo instalam as dependências para boa parte dos usos,
incluindo barra de navegação com botões, tabs e drawer. Naturalmente,
nem todos os projetos fazem uso de todos os recursos e, portanto,
nestes casos, nem todas estas dependências precisam ser instaladas.

1. `expo install react-navigation react-native-gesture-handler`
1. `expo install react-native-reanimated react-native-screens react-native-safe-area-context`
1. `expo install react-navigation-stack @react-native-community/masked-view`
1. `expo install react-native-paper`
1. `expo install react-navigation-header-buttons`
1. `expo install react-navigation-tabs`
1. `expo install react-navigation-material-bottom-tabs`

# Cenário de implementação

- A Home (tela principal) contém _drawer_, _tabs_ (parte inferior) e oferece 
navegação (via botão) para uma segunda tela na qual é possível ir a uma terceria. 
Da terceira pode-se retornar para a segunda e da segunda para a primeira (stack). 
- Há 3 tabs: home (descrita acima), favoritos, notas.
- Há as seguintes opções na _drawer_: Home, info, configuração, avaliação.

# Código

- Crie o arquivo [HeaderButton.js](./screens/HeaderButton.js)
- Configuração da [navegação](./screens/Navegacao.js)

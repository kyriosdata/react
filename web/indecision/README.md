### live-server para visualizar o que está em public

- `npm install --save-dev live-server`
- `live-server public` (disponibiliza public via web com "live reload")

### Babel para converter JSX para js convencional

- `npm install --save-dev nodemon`
- `npm install --save-dev @babel/cli`
- `npm install --save-dev @babel/core`
- `npm install --save-dev @babel/preset-env`
- `npm install --save-dev @babel/preset-react`

## Desenvolvimento (dinâmica)

- Colocar Babel monitorando diretório e realizando conversão sempre que houver mudança.
- Colocar live-server em funcionamento para monitorar diretório atualizado pelo Babel e atualizar browser a cada mudança.

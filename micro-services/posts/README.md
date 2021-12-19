## Executando (docker)

- `docker build -t posts-ws .`
- `docker run posts-ws`

## Executando (shell)

- `npm start` ou
- `node index.js`

## curl (testes)

- `curl http://192.168.1.6:4000/posts`
- `curl -X POST http://192.168.1.6:4000/posts --data-raw '{"teste":"ok"}' -H 'Content-Type: application/json'`

# Microserviços Kafka em nodeJS

    Microserviço de Email Sender implementado em NODEJS utitlizando Kafka

# Instalação e run

```shell
    $ yarn install
    $ yarn run dev

```
### Docker
```shell
    $ docker-compose --up
```

## Monitor 
    - Prometheus
    - User o docker-compose-prod para subir o prometheus
    - Ele roda na porta configurada no docker compose 3030

## Test
    - Depois do docker + node rodando, basta iniciar o index.test.js dentro da pasta test
    - Vai criar uma requisição de fila no kafka


## Author
    Gabriell Huver [GitHub] (https://github.com/gabriellhuver)
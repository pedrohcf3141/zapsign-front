# Aplicação Angular com Docker

## Visão Geral
Este projeto é uma aplicação Angular simples que consome dados de uma API backend. Ele inclui um `Dockerfile` e um `docker-compose.yml` para facilitar o processo de deploy em contêineres.

## Pré-requisitos
- Docker instalado em sua máquina.
- Docker Compose (já incluído no Docker Desktop).

## Configuração do Projeto

1. Clone este repositório ou faça o download dos arquivos do projeto.
2. Navegue até o diretório do projeto.

    ```bash
    cd seu-diretorio-angular
    ```

3. Construa e inicie o contêiner Docker usando o Docker Compose.

    ```bash
    docker-compose up --build
    ```

4. Acesse a aplicação em seu navegador em [http://localhost:4200](http://localhost:4200).

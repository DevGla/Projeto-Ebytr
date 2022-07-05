# Projeto-Ebytr

Este projeto tem como Objetivo, criar uma aplicação que integra o FrontEnd ao BackEnd e junto com Banco de dados, cria um CRUD (sigla em inglês para: Create, Read, Update e Delete), onde o usuário poderá criar (C), resgatar (R), atualizar (U) e deletar (D) tarefas com algumas informações como o nome, a data de criação e o status(pendente, em andamento, concluída).


## 🚀 Começando

Esta aplicação está estruturada no conceito de containers. Os containers são ambientes onde podemos criar uma atmosfera com todos os requisitos de sistema que precisamos para que a aplicação funcione. Atualmente na aplicação existem três containers, um para o FrontEnd, um para o BackEnd e um para o Banco de dados.

### 🔧 Instalação

1 – Você deve clonar o repositório

- No terminal do seu computador digite o seguinte comando:

* `git clone git@github.com:DevGla/Projeto-Ebytr.git`

-- Este comando irá clonar o repositório para a sua maquina.


2 - Você deverá criar todo o sistema de funcionamento da aplicação, usando o docker compose (https://docs.docker.com/compose/ link para documentação).

- No terminal do seu computador digite os seguintes comandos:

* cd Projeto-Ebytr

* `docker-compose up --build -d`

-- Este comando irá executar o docker compose e criar os container.


## 📦 INICIALIZAÇÃO DA APLICAÇÃO

1 – Iniciaremos o Back End

- No terminal do seu computador digite os seguintes comandos:

* `cd backend`

* `docker exec backend_container npx sequelize db:create`

-- Este comando irá criar o banco de dados onde armazenaremos as informações criadas.

* `docker exec backend_container npx sequelize db:migrate`

-- Este comando irá criar a tabela no banco de dados para organização das informações.

* `npm run dev`

-- Este comando irá subir nosso servidor Back End.

OBS: AO RODAR O COMANDO ACIMA, O TERMINAL USADO FICARÁ INDISPONÍVEL, POIS ESTARÁ EXECUTANDO O BACK END. PARA EXECUÇÃO DOS SEGUINTES COMANDOS HAVERÁ A NECESSIDADE DE UM NOVO TERMINAL.

2 - Iniciaremos o Front End

- No terminal do seu computador digite os seguintes comandos:

* `cd frontend`

* `npm start`

-- Este comando irá criar a interface da nossa aplicação (Front End).


## ⚙️ Testes

Para esta aplicação, foi usado os conceitos de testes unitários dentro do Front End, e Testes de integração para o Back End.

### Execução dos testes

Dentro da pasta front End.

- No terminal do seu computador digite o seguinte comando: 

* `npm run test`

Para execução dos testes de cobertura total (Este teste verifica o percentual de cobertura de testes na aplicação) no Front End.

- No terminal do seu computador digite o seguinte comando: 

* `npm run test:coverage`

Dentro da pasta Back End.

- No terminal do seu computador digite o seguinte comando: 

* `npm run test`

Para execução dos testes de cobertura total (Este teste verifica o percentual de cobertura de testes na aplicação) no Back End.

- No terminal do seu computador digite o seguinte comando: 

* `npm run test:coverage`


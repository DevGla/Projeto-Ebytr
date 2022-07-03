# Projeto-Ebytr

Olá seja bem-vindo ao repositório do Projeto Ebytr, Desenvolvido por George Lucas. 

Este projeto tem como Objetivo, criar uma aplicação que integra o FrontEnd ao BackEnd e junto com Banco de dados, cria um CRUD (sigla em inglês para: Create, Read, Update e Delete), onde o usuário poderá criar (C), resgatar (R), atualizar (U) e deletar (D) tarefas com algumas informações como o nome, a data de criação e o status(pendente, em andamento, concluída).

Instruções para instalação: 

1 – Você deverá clonar o repositório: 

- No terminal do seu computador digite o seguinte comando:

* `git clone URL`
* Este comando irá clonar o repositório para a sua maquina.

 2 – Você deverá criar todo o sistema de funcionamento da aplicação:
 
 A aplicação está estruturada no conceito de containers. Os containers são ambientes onde podemos criar uma atmosfera com todos os “programas” que precisamos para que a aplicação funcione. Atualmente são 3 containers, 1 para o FrontEnd, 1 para o BackEnd e 1 para o Banco de dados, sendo assim cada container contém o necessário(bibliotecas, programas...) para que os respectivos blocos de código funcionem.

-  No terminal do seu computador digite o seguinte comando:

* `docker-compose up --build -d` 
* Este comando irá rodar o Docker compose (link da documentação), este “método” consiste em criar uma rede de containers que podem se comunicam entre si. 

3 – Iniciaremos o FrontEnd

- No terminal do seu computador digite o seguinte comando:

* `cd frontend`
* Este comando irá entrar na pasta “frontend”.

* `npm start`
* Este comando é usado para iniciar a nossa aplicação FrontEnd e criar a página inicial do projeto.

* `Cd ..`

* Este comando retrocede uma pasta dentro do projeto, voltando assim para a pasta raiz

3 – Iniciaremos o BackEnd

- No terminal do seu computador digite o seguinte comando:

* `cd backend`

* Este comando irá entrar na pasta BackEnd

* `npm run dev`

* Este comando é usado para iniciar a nossa aplicação BackEnd e criar o nosso servidor que buscará as informações no Banco de dados.


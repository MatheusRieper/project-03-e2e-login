# Project-03 – Login Tests with Cypress (Fixture & Custom Commands)

Este projeto faz parte do meu portfólio de estudos em **Quality Assurance (QA)**, com foco em **automação de testes E2E utilizando Cypress**.  
O objetivo principal é validar o fluxo de **login**, com ênfase em **cenários negativos**, utilizando **fixtures** e **custom commands** para garantir código limpo, reutilizável e escalável.

---

## Tecnologias Utilizadas

- JavaScript
- Cypress
- Node.js
- JSON (Fixtures)
- Git & GitHub

---

## Estrutura do Projeto

```text
cypress/
 ├── e2e/
 │   └── login.cy.js
 ├── fixtures/
 │   └── login.json
 └── support/
     └── commands.js

Descrição das pastas

e2e/
Contém os cenários de teste automatizados.

fixtures/
Contém os dados de teste (login.json), permitindo a execução de testes orientados a dados (data-driven testing).

support/commands.js
Contém custom commands, como cy.login() e cy.openPage(), para reutilização de ações comuns.

Cenários Automatizados
Login inválido (Negative Scenarios)

Os testes cobrem os seguintes cenários:

Email inválido

Senha inválida

Campo email vazio

Campo senha vazio

Os dados de cada cenário são definidos no arquivo login.json, permitindo fácil manutenção e inclusão de novos casos.

Boas Práticas Aplicadas

Uso de Fixtures para separar dados da lógica de teste

Criação de Custom Commands para evitar duplicação de código

Testes data-driven com iteração usando forEach

Organização clara da estrutura do projeto

Asserts de visibilidade e comportamento da interface

Site Testado

https://the-internet.herokuapp.com/login

Como Executar o Projeto
Pré-requisitos

Node.js instalado

Git instalado

Passos

Clone o repositório:

git clone <URL_DO_REPOSITORIO>


Acesse a pasta do projeto:

cd project-03


Instale as dependências:

npm install


Execute o Cypress:

npx cypress open


ou

npx cypress run

Objetivo do Projeto

Este projeto tem como objetivo praticar e consolidar conhecimentos em:

Automação de testes E2E

Cypress

Organização de testes

Reutilização de código

Boas práticas em QA

Faz parte de uma sequência de projetos desenvolvidos para evolução contínua na área de Quality Assurance.

Autor

Matheus Souza
QA em formação | Automação de Testes
GitHub: (adicione o link do seu perfil aqui)
LinkedIn: (opcional)
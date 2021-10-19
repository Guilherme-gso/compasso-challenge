<div align="center">
  <img src="https://blog.compassouol.com/wp-content/uploads/2020/03/LogoCompasso-negativo.jpg" height="200px">
  <h2 align="center">Challenge Compasso Uol NodeJS</h2>
</div>
<br />

<div margin="10px 0" align="center">
    <img alt="Github Top Language" src="https://img.shields.io/github/languages/top/Guilherme-gso/compasso-challenge">
    <img alt="Github language count" src="https://img.shields.io/github/languages/count/Guilherme-gso/compasso-challenge">
    <img alt="Size" src="https://img.shields.io/github/repo-size/Guilherme-gso/compasso-challenge">
</div>

## Sobre o projeto
Esse projeto foi desenvolvido como desafio do processo seletivo da Compasso UOL para vaga de NodeJS. Foram utilizados padrões de projeto como DDD (Domain Driven Design), TDD (Test Driven Development) e POO (Programação Orientada a Objetos) avançado. Busquei alcançar o código mais legível, estruturado e limpo utilizando conceitos de clean-architecture, respeitando as responsabilidades de cada parte isolada do código através dos princípios SOLID e separação por camadas utilizando o DDD, todas as regras de negócio foram implementadas com base no TDD, ou seja, o desenvolvimento de todas as funcionalidades foi com base em testes unitários. A API está alocada no Heroku com uma instância de Banco de Dados relacional PostgreSQL e sua documentação online está disponível <a href="https://compasso-uol-challenge-node.vercel.app/
">Aqui.</a>

## Tecnologis utilizadas
- Node.js
- Typescript
- Jest
- Typeorm
- PostgreSQL
- ExpressJS
- Babel


## Arquiteturas utilizados
- DDD (Domain Driven Design)
- TDD (Test Driven Development)
- POO (Programação Orientada a Objetos)
- Princípios SOLID
- Factory

## Ferramentas de Desenvolvimento
- Visual Studio Code
- Insomnia REST
- Docker

## Como utilizar
*Baixe o projeto em sua máquina:*

```typescript
  git clone https://github.com/Guilherme-gso/compasso-challenge.git
```

*Instale as depêndencias:*

```bash
 npm install
```


Após realizar a cópia do projeto e instalar as dependências em sua máquina local será necessário a configuração das variáveis de ambiente. 
<br />
<br />
Utilize o arquivo ```.env.example``` localizado na raíz do projeto como base para criar o seu arquivo ```.env```: 

- ### env.example 
```.env
    TS_NODE_ENV=dev
    PORT=3333
    DATABASE_URL=postgres://username:password@localhost:5432/your-database-name
```

Após criar o seu arquivo ```.env``` você deverá ter algo parecido com isso:
```.env
    TS_NODE_ENV=dev
    PORT=3333
    DATABASE_URL=postgres://postgres:docker@localhost:5432/challenge-compasso
```

## Testes automatizados
Esse projeto foi construído com base em testes automatizados, para executá-los utilize o seguinte comando:
```bash
  npm run test
```

## Migrando Banco de Dados

Nesse projeto estaremos utilizando o recurso das migrations para versionamento do nosso banco de dados, portanto após criar seu banco de dados local e setar suas variáveis de ambiente será necessário realizar as migrations para a criação das tabelas no banco de dados, para isso vamos utilizar o seguinte comando: 

```bash
  npm run typeorm migration:run
```

## Inicializando Projeto

Pronto, o projeto está pronto para ser inicializado, se ocorreu tudo basta utilizar o comando: ```npm run dev``` que inicializará o projeto em sua máquina local, por padrão ele irá rodar na porta *3333* (Você pode mudar a porta padrão nas variáveis de ambiente)

Após ser inicializado, você receberá um output em seu terminal indicando que o processo foi inicializado: 

```Process running on http://localhost:3333```


## URL no Heroku
https://compasso-uol-challenge.herokuapp.com/api

## Documentação
https://compasso-uol-challenge-node.vercel.app/


Feito com :hearts: por Guilherme Oliveira :wave: [Linkedin!](https://www.linkedin.com/in/guilherme-oliveira-59291a19b/)

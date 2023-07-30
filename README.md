**Projeto Final {Reprograma}**

 **Sobre o projeto**

Olá! Esta é a documentação do projeto Mapeamento de Técnicas em Eletrotécnica, desenvolvido como projeto para a conclusão do curso de Backend da Reprograma, turma 22. Refletindo sobre o desemprego e a dificuldade das mulheres em empregar-se em áreas profissionais ocupadas majoritariamente poor homens, nasceu cesta idea: desenvolver uma API tem por objetivo realizar o mapeamento de técnicas em eletrotécnica no estado do Pará, e tem como foco dar visibilidade ao trabalho de mulheres em uma área profissional a qual é ocupada majoritariamente por homens.

Um banco de dados contendo o cadastro e informações de mulheres profissionais na área de eletrotécnica facilita o acesso ao trabalho e contato com essas profissionais. Pensando também no desenvolvimento do projeto, abarcando mais informações além de dados básicos como contato e especialidade, mas também currículo, experiência, formação.

**Descrição da API - Mapeamento de Técnicas em Eletrotécnica**

O projeto consiste no cadastro de técnicas pelo nome, especialidades e município de atuação profissional. O cliente poderá ter acesso a uma lista completa de todos os cadastros e ainda buscar profissional por ID.

A interface é um CRUD integrado com o banco de dados MongoDB, one é possível listar técnicas cadastradas, cadastrar novas técnicas, atualizar informações, buscar técnica por ID e deletar cadastros.

**Tecnologias Utilizadas**

*   Javascript
*   Nodejs
*   GitHub
*   MongoDB
*   Postman
*   VSCode
*   Render

**Módulos utilizados**

*   Express
*   Nodemon
*   Dotenv
*   Mongoose
*   Swagger-UI-Express
*   Cors

**Instalação**

Deve-se ter o NodeJS instalado previamente no seu sistema operacional, através do site [NodeJS.org](nodejs.org)

```plaintext
# Deve-se clonar este repositório através do código.
$ git clone https://github.com/guzi95/mapeamento-tecnicas-eletrica/

# Entrar na pasta mapeamento-tecnicas-eletrica.
$ cd mapeamento-tecnicas-eletrica

# Instalar dependências.
$ npm install

# Executar o servidor.
$ npm start
```
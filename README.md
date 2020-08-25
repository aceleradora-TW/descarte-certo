# Template de projeto

Este repositório serve como um template para criar um novo projeto utilizando as tecnologias aplicadas nos projetos da Aceleradora Ágil.
Templates são uma funcionalidade do Github, para entendê-la em mais detalhes, visite [esta
página](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-template-repository).

Este template foi baseado no projeto [Easy Beasy](https://github.com/aceleradora-TW/easy-beasy-v2) e em tudo que aprendemos durante seu
desenvolvimento. Para saber mais sobre as decisões tomadas na construção desse repositório, dê uma olhada no
[Kanban](https://github.com/aceleradora-TW/template-de-projeto/projects/) e nas
[issues](https://github.com/aceleradora-TW/template-de-projeto/issues).

## Tecnologias

  - [Java 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
  - [Node 12.16.2 LTS](https://nodejs.org/en/download/)
  - React
  - [Postgres 12](https://www.postgresql.org/download/)
  - [IntelliJ Community Edition](https://www.jetbrains.com/idea/download/)


###  Ferramentas recomendadas (não obrigatórias)

Algumas recomendações de ferramentas para trabalhar com este template. Embora recomendadas, elas *não são obrigatórias*
para o funcionamento do projeto:

  - [Docker](https://www.docker.com/get-started)
  - [Postman](https://www.postman.com/downloads/)
  - [Visual Studio Code](https://code.visualstudio.com/download)
  - [Tmux](https://github.com/tmux/tmux/wiki)

## Executando o projeto

### Garanta acesso ao banco de dados

Antes de executar o backend, garanta que o Postgres esteja rodando na máquina e que exista um banco de dados 
chamado `template_aceleradora`. Localmente, o backend tentará se conectar ao banco usando usuário `postgres` e senha 
`123456`. Talvez seja necessário alterar a senha do usuáro `postgres` para que projeto possa executar corretamente

Para isso, execute:

```sql
ALTER USER postgres WITH PASSWORD '123456';
```

Também é possível executar o banco de dados com Docker. Execute o script `docker-db.sh` para mais instruções:

```shell script
./docker-db.sh
```

### Inicie o backend

Em um terminal, execute o comando:

```shell script
./gradlew bootrun
```

Este comando iniciará a execução do backend do projeto. Perceba que ele continuará executando até ser parado manualmente,
O que pode ser feito pressionando as teclas <kbd>ctrl</kbd> + <kbd>c</kbd>.

### Inicie o frontend

Abra uma nova janela de terminal, já que o backend estará bloqueando a primeira janela.

É necessário executar `yarn install` caso seja a primeira vez que você esteja executando o projeto no computador, ou quando uma nova
biblioteca for adicionada ao projeto (`yarn add`):

```shell
cd frontend
yarn install
```

Com as dependências instaladas, execute o comando:

```shell script
# Voce precisa estar dentro da pasta frontend
yarn start;
```

Assim como o backend, este comando seguirá executando até ser parado manualmente. Ele também atualizará o front-end a 
cada mudança feita no código, portanto, não é necessário executá-lo novamente para ver as mudanças aplicadas.

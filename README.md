 # Descarte Certo

[![CircleCI](https://circleci.com/gh/aceleradora-TW/descarte-certo.svg?style=svg)](https://app.circleci.com/pipelines/github/aceleradora-TW/descarte-certo?branch=master)


Projeto que visa a criação de uma plataforma com implementações back e frontend com intenção de facilitar a busca e contratação do serviço das 5 marias. Consta uma página, efetua o orçamento o envia por email para as proprietárias, e envia dados para o banco cujo apenas elas tem acesso.

Esse projeto foi a ideia vencedora do Creathon de 2019 e posteriormente se juntou com a equipe da aceleradora ágil para desenvolver a plataforma, o time de POs é composto por 5 mulheres: Marcia Castro (empresária), Fernanda Sequeira (publicitária), Sonia Fagundes (engenheira ambiental), Edna Menegaz (engenheira agronoma) e Daniely Votto (advogada).

## Tecnologias:
  - [Java 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
  - [Node 12.16.2 LTS](https://nodejs.org/en/download/)
  - [React](https://reactjs.org/docs/getting-started.html)
  - [Postgres 12](https://www.postgresql.org/download/)
  - [IntelliJ Community Edition](https://www.jetbrains.com/idea/download/)
  - [Heroku reference](https://devcenter.heroku.com/categories/reference)
  - [CircleCI reference](https://circleci.com/docs/2.0/getting-started/#section=getting-started)
### Pipeline

* [CircleCI - Descarte Certo](https://app.circleci.com/pipelines/github/aceleradora-TW/descarte-certo)
* [Heroku - Descarte Certo](https://dashboard.heroku.com/apps/descartecerto)
### Como ver os logs da aplicação
- Precisa primeiro instalar o client no terminal https://devcenter.heroku.com/articles/heroku-cli

### Stage
```
heroku logs --app descartecerto --tail
```
### Prod
```
heroku logs --app descartecerto-prod --tail
```
### Backend testes
Usando https://httpie.org/
```
http GET http://localhost:8080/solicitcaoOrcamentoDescarte/1
http POST http://localhost:8080/solicitcaoOrcamentoDescarte/create < backend/src/test/resources/createSolicitacaoRequest.json
```
## Executando o projeto

### Garanta acesso ao banco de dados

Antes de executar o backend, garanta que o Postgres esteja rodando na máquina e que exista um banco de dados 
chamado `descarte_certo`. Localmente, o backend tentará se conectar ao banco usando usuário `postgres` e senha 
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

## Template

Este repositório serve como um template para criar um novo projeto utilizando as tecnologias aplicadas nos projetos da Aceleradora Ágil.
Templates são uma funcionalidade do Github, para entendê-la em mais detalhes, visite [esta
página](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-template-repository).

Este template foi baseado no projeto [Easy Beasy](https://github.com/aceleradora-TW/easy-beasy-v2) e em tudo que aprendemos durante seu
desenvolvimento. Para saber mais sobre as decisões tomadas na construção desse repositório, dê uma olhada no
[Kanban](https://github.com/aceleradora-TW/template-de-projeto/projects/) e nas
[issues](https://github.com/aceleradora-TW/template-de-projeto/issues).
## Como contribuir?

### 1) Escolha uma card no Kanban
- KABAN: https://github.com/aceleradora-TW/descarte-certo/projects/1
- Exemplo: ```#4 Adicionar botão de envio de email```

### 2) Crie um branch novo com a nomeclarura ```numero_do_card/nome_do_card```
- Exemplo: ```4/adiciona-botao-envio-email```
```
git checkout master
git pull
git checkout -b 4/adiciona-botao-envio-email
```

### 3) Faça os commits necessários seguindo nomeclatura:```numero_do_card/@nome_aluna @nome aluna: o que o commit faz  para commit```&nbsp;
- Exemplo: ```#4/ @Maria @Joao: Adiciona o CSS para o botão de envio de email```
- Exemplo: ```#4/ @Maria @Joao: Adcionar o layout do botão de envio de email```
```
git commit -m "#4/ @Maria @Joao: Adiciona o CSS para o botão de envio de email"
```

### 4) Rodar os testes locais e garantir que estão passando

- ```./gradlew buildForProduction```

### 5) Realize o push do branch
- ```git push --set-upstream origin <NOME DO BRANCH>```

### 6) Abra um Pull Request no GitHub com o Branch
- PR: https://github.com/aceleradora-TW/descarte-certo/pulls
- Informe o pull request no chat slack da Aceleratora para pedir revisões
- CHAT: https://app.slack.com/client/TCHD1PE84/CRSV6QFTP/thread/C011T9DKQ9G-1600350556.008200?cdn_fallback=1

### 7) Após revisado e testado pode mergear com a master
- O branch precisa estar revisado e aprovado
- O branch não pode ter conflitos
- O branch precisa rodar os testes de integração com sucesso (CircleCI)

### 8) Garantir que o build+deploy da master rodou com sucesso e pedir para outra dupla fazer o QA
- BUILD: https://app.circleci.com/pipelines/github/aceleradora-TW/descarte-certo
###  Ferramentas recomendadas (não obrigatórias)

Algumas recomendações de ferramentas para trabalhar com este template. Embora recomendadas, elas *não são obrigatórias*
para o funcionamento do projeto:

  - [Docker](https://www.docker.com/get-started)
  - [Postman](https://www.postman.com/downloads/)
  - [Visual Studio Code](https://code.visualstudio.com/download)
  - [Tmux](https://github.com/tmux/tmux/wiki)


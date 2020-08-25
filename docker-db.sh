#!/bin/bash

readonly CONTAINER_NAME=template-aceleradora-db
readonly POSTGRES_USER=postgres
readonly POSTGRES_PASSWORD=123456
readonly POSTGRES_IMAGE="postgres:12"
readonly DATABASE_NAME=template_aceleradora

case $1 in
  run-volatile)
    docker run \
      --rm \
      --name ${CONTAINER_NAME} \
      --publish 5432:5432 \
      --env POSTGRES_PASSWORD=${POSTGRES_PASSWORD} \
      --detach \
      ${POSTGRES_IMAGE}
  ;;
  run-persistent)
    mkdir -p ~/.pgsql/${CONTAINER_NAME}
    docker run \
      --rm \
      --name ${CONTAINER_NAME} \
      --volume ~/.pgsql/${CONTAINER_NAME}:/var/lib/postgresql/data \
      --publish 5432:5432 \
      --env POSTGRES_PASSWORD=${POSTGRES_PASSWORD} \
      --detach \
      ${POSTGRES_IMAGE}
  ;;

  create)
    docker exec -it ${CONTAINER_NAME} psql -U ${POSTGRES_USER} -c "CREATE DATABASE ${DATABASE_NAME}"
  ;;

  console)
    docker exec -it ${CONTAINER_NAME} psql -U ${POSTGRES_USER} -d ${POSTGRES_PASSWORD}
  ;;

  stop)
    docker stop ${CONTAINER_NAME}
  ;;

  *)
    echo "Opcoes: "
    echo -e "\t - run-volatile: Inicia container com volume de dados volatil (dados sao perdidos quando o container para)"
    echo -e "\t - run-persistent: Inicia container com volume de dados persistente"
    echo -e "\t - create: Cria banco de dados dentro do container"
    echo -e "\t - console: Abre cliente postgres conectado ao container"
    echo -e "\t - stop: Para execucao do container"
  ;;
esac

package com.thoughtworks.aceleradora.repository;

import org.springframework.stereotype.Service;

@Service
public class AccessTokenRepository {

    public boolean isTokenAuthorized(String token) {
        //TODO 1 criar entidade de access token no banco de dados
        //TODO ajustar essa classe como uma entidade de JPA
        // - Deve ser uma interface que usa Repository
        // - Foi criada assim apenas para demonstracao
       return "tokenAcessAdmExemplo".equalsIgnoreCase(token);
    }
}

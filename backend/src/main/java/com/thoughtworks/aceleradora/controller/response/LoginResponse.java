package com.thoughtworks.aceleradora.controller.response;

import com.thoughtworks.aceleradora.service.JwtToken;
import com.thoughtworks.aceleradora.service.User;

import java.util.Optional;

public class LoginResponse {

    public Optional<String> returnLogin(String email, String password) {
        JwtToken jwtToken = new JwtToken();

        if (email.equals("5marias.sustentaveis@gmail.com") && password.equals("1234abc")) {
            return Optional.of(jwtToken.createTokenByUser(new User(email, password)));
        }

        return Optional.empty();
    }
}

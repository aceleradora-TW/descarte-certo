package com.thoughtworks.aceleradora.controller.response;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import javax.validation.constraints.NotNull;

public class LoginResponse {


    public String returnLogin(@NotNull String email, String password) {
        //try
        if (email.equals("Sonia") && password.equals("1234abc")) {
            Algorithm algorithm = Algorithm.HMAC256("secret");
            String token = JWT.create()
                    .withIssuer(email)
                    .sign(algorithm);
            return token;
        } else {
            return "Nao funcionou";
        }
    }
}

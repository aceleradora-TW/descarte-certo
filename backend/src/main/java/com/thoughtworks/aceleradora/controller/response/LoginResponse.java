package com.thoughtworks.aceleradora.controller.response;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import java.util.HashMap;
import java.util.Map;

public class LoginResponse {


    public String returnLogin(String email, String password) {
        Map<String, Object> payloadClaims1 = new HashMap<>();
        payloadClaims1.put("email", email);
        Map<String, Object> payloadClaims2 = new HashMap<>();
        payloadClaims2.put("password", password);

        if (email.equals("Sonia") && password.equals("1234abc")) {
            Algorithm algorithm = Algorithm.HMAC256("secret");
            String token = JWT.create()
                    .withPayload(payloadClaims1)
                    .withPayload(payloadClaims2)
                    .sign(algorithm);
            return token;
        } else {
            return "USER NOT FOUND";
        }
    }
}

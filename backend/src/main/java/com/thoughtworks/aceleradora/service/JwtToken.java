package com.thoughtworks.aceleradora.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import java.util.HashMap;
import java.util.Map;

public class JwtToken {
    private Algorithm algorithm;

    public JwtToken(String token){
    }

    public JwtToken(){
        algorithm = Algorithm.HMAC256("secret");
    }

    public String createTokenByUser(User user){
        Map<String, Object> email = new HashMap<>();
        email.put("email", user.getEmail());
        Map<String, Object> password = new HashMap<>();
        password.put("password", user.getPassword());

        return JWT.create()
                .withPayload(email)
                .withPayload(password)
                .sign(algorithm);
    }
}

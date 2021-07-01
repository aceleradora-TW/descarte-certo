package com.thoughtworks.aceleradora.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import java.util.HashMap;
import java.util.Map;

public class JwtToken {
    private String token;
    private Algorithm algorithm;

    public JwtToken(String token){
        this.token = token;
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

    public void validToken(){
        JWTVerifier verifier = JWT.require(algorithm).build();
        DecodedJWT jwt = verifier.verify(token);
    }

}

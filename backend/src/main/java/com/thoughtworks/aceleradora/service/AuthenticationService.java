package com.thoughtworks.aceleradora.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Map;

@Service
public class AuthenticationService {
    private Algorithm algorithm;

    public AuthenticationService(){
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

    public Boolean validToken(String token) {
        JWTVerifier jwtVerifier = JWT.require(algorithm).build();
        DecodedJWT decodedJWT = jwtVerifier.verify(token);

        String emailToken = decodedJWT.getClaims().get("email").toString().replace("\"" ,"");

        if (emailToken.equals("5marias.sustentaveis@gmail.com")) {
            return true;
        }
        return false;
    }
}
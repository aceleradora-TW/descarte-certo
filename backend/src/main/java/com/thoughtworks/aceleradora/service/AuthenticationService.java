package com.thoughtworks.aceleradora.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class AuthenticationService {

    private final String jwtSecret;
    private String loginEmail;
    private String loginPassword;

    public AuthenticationService(@Value("${login.email}")String loginEmail, @Value("${login.password}") String loginPassword, @Value("${login.jwtsecret}") String jwtSecret){
        this.loginEmail = loginEmail;
        this.loginPassword = loginPassword;
        this.jwtSecret = jwtSecret;
    }

    private String createTokenByUser(User user){
        Algorithm algorithm = Algorithm.HMAC256(jwtSecret);
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
        Algorithm algorithm = Algorithm.HMAC256(jwtSecret);
        JWTVerifier jwtVerifier = JWT.require(algorithm).build();
        DecodedJWT decodedJWT = jwtVerifier.verify(token);

        String emailToken = decodedJWT.getClaims().get("email").toString().replace("\"" ,"");

        if (emailToken.equals(loginEmail)) {
            return true;
        }
        return false;
    }

    public Optional<String> returnLogin(String email, String password) {
        if (email.equals(loginEmail) && password.equals(loginPassword)) {
            return Optional.of(createTokenByUser(new User(email, password)));
        }
        return Optional.empty();
    }
}

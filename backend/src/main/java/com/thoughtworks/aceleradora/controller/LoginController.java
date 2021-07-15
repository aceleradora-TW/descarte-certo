package com.thoughtworks.aceleradora.controller;

import com.thoughtworks.aceleradora.controller.response.LoginResponse;
import com.thoughtworks.aceleradora.service.User;
import com.thoughtworks.aceleradora.service.AuthenticationService;
import com.thoughtworks.aceleradora.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@RequestMapping("/login")

public class LoginController {

    @Value("${login.email}")
    private String loginEmail;

    @Value("${login.password}")
    private String loginPassword;

    @PostMapping
    public LoginResponse signIn(@RequestBody User user) {

        try {
            Optional<String> data = this.returnLogin(user.getEmail(), user.getPassword());
            if (data.isPresent()) {
                return new LoginResponse(data.get());
            } else {
                throw new UserNotFoundException();
            }
        } catch (UserNotFoundException e) {
            throw new UserNotFoundException("Usuario não encontrado! Verifique se os dados foram digitados corretamente.");
        }
    }
    public Optional<String> returnLogin(String email, String password) {
        AuthenticationService authenticationService = new AuthenticationService();

        if (email.equals(loginEmail) && password.equals(loginPassword)) {
            return Optional.of(authenticationService.createTokenByUser(new User(email, password)));
        }

        return Optional.empty();
    }

}
package com.thoughtworks.aceleradora.controller;

import com.thoughtworks.aceleradora.controller.response.LoginResponse;
import com.thoughtworks.aceleradora.exception.UserNotFoundException;
import com.thoughtworks.aceleradora.service.AuthenticationService;
import com.thoughtworks.aceleradora.service.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/login")

public class LoginController {

    private AuthenticationService authenticationService;

    public LoginController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping
    public LoginResponse signIn(@RequestBody User user) {
        try {
            Optional<String> data = authenticationService.returnLogin(user.getEmail(), user.getPassword());
            if (data.isPresent()) {
                return new LoginResponse(data.get());
            } else {
                throw new UserNotFoundException();
            }
        } catch (UserNotFoundException e) {
            throw new UserNotFoundException("Usuario não encontrado! Verifique se os dados foram digitados corretamente.");
        }
    }

}

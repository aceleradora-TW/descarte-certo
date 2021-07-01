package com.thoughtworks.aceleradora.controller;

import com.thoughtworks.aceleradora.controller.response.LoginResponse;
import com.thoughtworks.aceleradora.service.User;
import com.thoughtworks.aceleradora.service.JwtToken;
import org.springframework.http.HttpStatus;
import com.thoughtworks.aceleradora.exception.UserNotFoundException;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

import javax.ws.rs.POST;

@RestController
@RequestMapping("/login")

public class LoginController {
    @PostMapping
    public JwtToken returnAPI(@RequestBody User user) {

        LoginResponse login = new LoginResponse();

        Optional<String> data = login.returnLogin(user.getEmail(), user.getPassword());

        if (data.isPresent()) {
            return new JwtToken(data.get());
        }else{
            throw new UserNotFoundException("Usuario não encontrado! Verifique se os dados foram digitados corretamente.");
        }
    }

}



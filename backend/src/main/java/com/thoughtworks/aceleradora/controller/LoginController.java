package com.thoughtworks.aceleradora.controller;

import com.thoughtworks.aceleradora.controller.response.LoginResponse;
import com.thoughtworks.aceleradora.service.User;
import com.thoughtworks.aceleradora.service.JwtToken;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.POST;

@RestController
@RequestMapping("/login")

public class LoginController {
    @PostMapping
    public JwtToken returnAPI(@RequestBody User user) {

        LoginResponse login = new LoginResponse();

        String data = login.returnLogin(user.getEmail(), user.getPassword());

        JwtToken token = new JwtToken(data);

        return token;

    }

}



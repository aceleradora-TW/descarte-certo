package com.thoughtworks.aceleradora.controller;

import com.thoughtworks.aceleradora.service.User;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")

public class LoginController {

    private User user;
    public LoginController(User user) {
        this.user = user;
    }

}



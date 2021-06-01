package com.thoughtworks.aceleradora.controller;

import com.thoughtworks.aceleradora.controller.response.LoginResponse;
import com.thoughtworks.aceleradora.service.User;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.POST;

@RestController
@RequestMapping("/login")

public class LoginController {
    @PostMapping
    public String returnAPI(@RequestBody User user) {

        LoginResponse login = new LoginResponse();

        String data = login.returnLogin(user.getUser(), user.getPassword());
        return data;

    }

}



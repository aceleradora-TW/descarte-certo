package com.thoughtworks.aceleradora.controller.response;

import lombok.Value;

@Value
public class LoginResponse {
    private String token;

    public LoginResponse(String token) {
        this.token = token;
    }
}

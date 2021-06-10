package com.thoughtworks.aceleradora.service;

import org.springframework.stereotype.Service;

@Service
public class User {

    private String email ;
    private String password ;

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

}

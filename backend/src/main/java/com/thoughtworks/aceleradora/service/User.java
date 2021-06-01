package com.thoughtworks.aceleradora.service;

import org.springframework.stereotype.Service;

@Service
public class User {

    private String user ;
    private String password ;

    public String getUser() {
        return user;
    }

    public String getPassword() {
        return password;
    }

}

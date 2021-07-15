package com.thoughtworks.aceleradora.service;
import javax.validation.constraints.NotNull;

public class User {
    @NotNull
    private String email ;
    @NotNull
    private String password ;

    public User(String email, String password){
        this.email = email;
        this.password = password;
    }
    public User(){}

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}

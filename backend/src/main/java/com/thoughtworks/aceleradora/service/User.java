package com.thoughtworks.aceleradora.service;
import org.springframework.stereotype.Service;
import javax.validation.constraints.NotNull;

@Service
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

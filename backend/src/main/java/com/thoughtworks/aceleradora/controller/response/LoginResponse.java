package com.thoughtworks.aceleradora.controller.response;


public class LoginResponse {
    public String returnLogin(String user, String password) {

        if (user == "Sonia" && password == "1234abc") {
            System.out.println("Tudo certo");
            return "ok";
        } else {
            return "Nao funcionou";
        }


    }
}

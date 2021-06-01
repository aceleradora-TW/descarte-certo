package com.thoughtworks.aceleradora.controller.response;


public class LoginResponse {
    public String returnLogin(String user, String password) {

        if (user.equals("Sonia") && password.equals("1234abc")) {
            System.out.println("Tudo certo");
            return "ok";
        } else {
            return "Nao funcionou";
        }


    }
}

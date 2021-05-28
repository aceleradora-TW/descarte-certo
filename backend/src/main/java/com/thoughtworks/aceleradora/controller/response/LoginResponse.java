package com.thoughtworks.aceleradora.controller.response;

import com.thoughtworks.aceleradora.service.User;

public class LoginResponse {
    public static void main(String[] args) {
        User usuario = new User();
        if (usuario.getUser() == "Sonia" && usuario.getPassword() == "1234abc"){
            System.out.println("Tudo certo");
        }
        System.out.println("Acabou o codigo");

    }
}

package com.thoughtworks.aceleradora.service;

import org.springframework.stereotype.Service;

@Service
public class User {

        private String user = "Sonia";
        private String password = "1234abc";

        public String getUser() {
            return user;
        }

        public String getPassword() {
            return password;
        }

}

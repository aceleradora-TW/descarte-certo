package com.thoughtworks.aceleradora.service.login;

public class User {

        private int idUser;
        private String user;
        private String password;

        public int getIdUser() {
            return idUser;
        }

        public String getUser() {
            return user;
        }

        public String getPassword() {
            return password;
        }

        public void setIdUser(int idUser) {
            this.idUser = idUser;
        }

        public void setUser(String user) {
            this.user = user;
        }

        public void setPassword(String password) {
            this.password = password;
        }

}

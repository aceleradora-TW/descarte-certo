package com.thoughtworks.aceleradora.exception;

public class AccessTokenDeniedExeption extends  RuntimeException {
    public AccessTokenDeniedExeption(String msg) {
        super(msg);
    }
}

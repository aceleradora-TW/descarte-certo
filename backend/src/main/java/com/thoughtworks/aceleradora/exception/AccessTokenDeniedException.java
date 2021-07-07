package com.thoughtworks.aceleradora.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class AccessTokenDeniedException extends RuntimeException {
    public AccessTokenDeniedException(String message) {
        super(message);
    }
}

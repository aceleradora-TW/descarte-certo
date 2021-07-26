package com.thoughtworks.aceleradora.service;


import org.junit.Test;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

public class AuthenticationServiceTest {

    private AuthenticationService authenticationService;
    @Test
    public void shouldCreateValidToken() {
        authenticationService = new AuthenticationService(
                "local@test.com", "senhalocal", "localsecret");
        var token = authenticationService.returnLogin("local@test.com", "senhalocal");
        assertThat(token).isNotEmpty();
    }

    @Test
    public void shouldValidateToken() {
        authenticationService = new AuthenticationService(
                "local@test.com", "senhalocal", "localsecret");
        var token = authenticationService.returnLogin("local@test.com", "senhalocal");
        var validToken = authenticationService.validToken(token.get());
        assertThat(validToken).isTrue();
    }

}

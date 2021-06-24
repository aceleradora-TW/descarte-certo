package com.thoughtworks.aceleradora.service;

public class JwtToken {
    private String token;

    public JwtToken(String token){
        this.token = token;
    }

	public String getToken() {
		return this.token;
	}
}
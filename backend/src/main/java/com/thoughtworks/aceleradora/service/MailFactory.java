package com.thoughtworks.aceleradora.service;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class MailFactory {

    private String username;
    private String password;
    private String email;

    public MailFactory(@Value("${mailgun.username}")String username, @Value("${mailgun.password}")String password, @Value("${mailgun.email}")String email){
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public JsonNode sendMessage(String mailBody) throws UnirestException {
        HttpResponse<JsonNode> request = Unirest.post("https://api.mailgun.net/v3/" + username + "/messages")
                .basicAuth("api",password)
                .field("from",email)
                .field("to", email)
                .field("subject", "E mail recebido com novo orçamento")
                .field("text", mailBody)
                .asJson();
        return request.getBody();

    }
}

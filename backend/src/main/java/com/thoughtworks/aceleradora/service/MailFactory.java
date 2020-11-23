package com.thoughtworks.aceleradora.service;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.entity.Estimate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class MailFactory {
    @Value("${MAILGUN_USERNAME}")
    private String username;
    @Value("${MAILGUN_PASSWORD}")
    private String password;
    @Value("${EMAIL}")
    private String email;

    public MailFactory(String username, String password, String email){
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public  JsonNode sendSimpleMessage(String mailBody) throws UnirestException {
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

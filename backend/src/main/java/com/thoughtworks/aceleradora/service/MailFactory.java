package com.thoughtworks.aceleradora.service;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.springframework.beans.factory.annotation.Value;


public class MailFactory {
    @Value("{$MAILGUN_USERNAME}")
    private String username;
    @Value("{$MAILGUN_PASSWORD}")
    private String password;

    private String email="5marias.sustentaveis@gmail.com";
    public  JsonNode sendSimpleMessage(String textBody) throws UnirestException {
        HttpResponse<JsonNode> request = Unirest.post("https://api.mailgun.net/v3/" + username + "/messages")
                .basicAuth("api",password)
                .field("from",email)
                .field("to", email)
                .field("subject", "E mail recebido com novo orçamento")
                .field("text", textBody)
                .asJson();
        return request.getBody();

    }
}

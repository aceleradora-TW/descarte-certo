package com.thoughtworks.aceleradora.service;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class MailFactory {

    private String username ;
    private String password ;
    private String emailSender;
    private String emailReceiver;
    private int uma;

    public MailFactory(@Value("${mailgun.username}")String username, @Value("${mailgun.password}")String password, @Value("${mailgun.emailSender}")
            String emailSender, @Value("${mailgun.emailReceiver}")String emailReceiver){
        this.username = username;
        this.password = password;
        this.emailSender = emailSender;
        this.emailReceiver = emailReceiver;
    }

    public void setEmailReceiver (String email){
        this.emailReceiver = email;
    }

    public JsonNode sendMessage(String mailBody) throws UnirestException {
        HttpResponse<JsonNode> request = Unirest.post("https://api.mailgun.net/v3/" + username + "/messages")
                .basicAuth("api",password)
                .field("from",emailSender)
                .field("to",emailReceiver)
                .field("subject", "E mail recebido com novo orçamento")
                .field("text", mailBody)
                .asJson();
        return request.getBody();

    }
}

package com.thoughtworks.aceleradora.service;

import com.mashape.unirest.http.exceptions.UnirestException;
import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.entity.Estimate;
import com.thoughtworks.aceleradora.entity.Requester;
import com.thoughtworks.aceleradora.entity.ResidueAddress;

public class MailService {

       MailFactory mailFactory;
       public MailService(MailFactory mailFactory){
           this.mailFactory = mailFactory;
       }

    public void MailSender (EstimateRequest estimate){
        try {
            mailFactory.sendSimpleMessage(estimate);
        } catch (UnirestException e) {
            e.printStackTrace();
        }
    }
}

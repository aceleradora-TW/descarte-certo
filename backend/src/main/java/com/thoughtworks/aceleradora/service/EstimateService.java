package com.thoughtworks.aceleradora.service;

import com.mashape.unirest.http.exceptions.UnirestException;
import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.entity.Estimate;
import com.thoughtworks.aceleradora.repository.EstimateRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EstimateService {

    private EstimateRepository estimateRepository;
    private EstimateConverterService estimateConverterService;
    private MailFactory mailFactory;

    EstimateService(EstimateRepository repository, EstimateConverterService estimateConverter, MailFactory mailFactory) {
        this.estimateRepository = repository;
        this.estimateConverterService = estimateConverter;
        this.mailFactory = mailFactory;
    }

    public Estimate create(EstimateRequest estimateRequest) {
        Estimate estimateEntity = estimateConverterService.converter(estimateRequest);
        sendEstimateEmail(estimateEntity);
        return estimateRepository.save(estimateEntity);
    }

    public Optional<Estimate> getEstimate(int codigo) {
        return estimateRepository.findById(codigo);
    }

    private void sendEstimateEmail(Estimate estimateEntity){
        StringBuffer sb =new StringBuffer();
        sb.append("Requisitante: <br>");
        sb.append(estimateEntity.getRequester().getName());
        sb.append("Telefone: <br>");
        sb.append("Email: <br>");
        sb.append("Cep: <br>");
        sb.append(estimateEntity.getResidueAddress().getCep());
        sb.append("Informações do local: <br>");
        sb.append(estimateEntity.getResidueAddress().getLocationInfo());
        try {
            mailFactory.sendSimpleMessage(sb.toString());
        } catch (UnirestException e) {
            e.printStackTrace();
        }
    }

}

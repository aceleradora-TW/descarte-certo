package com.thoughtworks.aceleradora.service;

import com.mashape.unirest.http.exceptions.UnirestException;
import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.entity.Estimate;
import com.thoughtworks.aceleradora.repository.EstimateRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.Optional;

@Service
public class EstimateService {

    private EstimateRepository estimateRepository;
    private EstimateConverterService estimateConverterService;
    private MailFactory mailFactory;


    EstimateService(EstimateRepository repository, EstimateConverterService estimateConverter,MailFactory mailFactory) {
        this.estimateRepository = repository;
        this.estimateConverterService = estimateConverter;
        this.mailFactory= mailFactory;
    }

    public void configureMailFactory(String email) {
        this.mailFactory.setEmailReceiver(email);
    }

    public Estimate create(EstimateRequest estimateRequest) {
        Estimate estimateEntity = estimateConverterService.converter(estimateRequest);
        this.sendEmail(estimateEntity,"5marias.orcamento@gmail.com");
        return estimateRepository.save(estimateEntity);
    }

    public Optional<Estimate> getEstimate(int codigo) {
        return estimateRepository.findById(codigo);
    }

    public Page<Estimate> getAllEstimates(Optional<Integer> page, Optional<String> sortBy, Optional<Integer> totalPage) {
        return estimateRepository.findAll(
                PageRequest.of(
                        page.orElse(0),
                        totalPage.orElse(20),
                        Sort.Direction.DESC, sortBy.orElse("id")
                )
        );
    }

    public Estimate updateStatus(int id){
        Optional<Estimate> estimate = this.getEstimate(id);
        if(estimate.isPresent()) {
            Estimate est = estimate.get();
            est.setStatus(OrderStatus.ACEITO);
             return estimateRepository.save(est);
         }
        return null;
    }

    public void sendEmail(Estimate estimate, String email){
        this.configureMailFactory(email);
        this.sendEstimateEmail(estimate);
    }


    private void sendEstimateEmail(Estimate estimateEntity){

        BigDecimal divisor = new BigDecimal("100");
        BigDecimal total = estimateEntity.getEstimateValue().divide(divisor);
        DecimalFormat resultado = new DecimalFormat("0.00");
        resultado.format(total);


        StringBuffer sb = new StringBuffer();
        sb.append("ORÇAMENTO SOLICITADO: ");
        sb.append( System.getProperty("line.separator"));
        sb.append( System.getProperty("line.separator"));

        sb.append("Requisitante: ");
        sb.append(estimateEntity.getRequester().getFullName());
        sb.append( System.getProperty("line.separator"));

        sb.append("Telefone: ");
        sb.append(estimateEntity.getRequester().getCellphone());
        sb.append( System.getProperty("line.separator"));


        sb.append("Email: ");
        sb.append(estimateEntity.getRequester().getEmail());
        sb.append( System.getProperty("line.separator"));

        sb.append("Região: ");
        sb.append(estimateEntity.getResidueAddress().getRegion());
        sb.append( System.getProperty("line.separator"));

        sb.append("Informações do local: ");
        sb.append(estimateEntity.getResidueAddress().getLocationInfo());
        sb.append( System.getProperty("line.separator"));

        sb.append("Informações do resíduo: ");
        sb.append(estimateEntity.getResidue().getResidueType());
        sb.append( System.getProperty("line.separator"));

        sb.append("Quantidade dos resíduo: ");
        sb.append(estimateEntity.getResidue().getResidueMeasure());
        sb.append( System.getProperty("line.separator"));

        sb.append("Valor do pedido: R$ ");
        sb.append(total);
        sb.append( System.getProperty("line.separator"));

        if (estimateEntity.getResidue().getResidueMeasure().contains("Caçamba")) {

            sb.append("Nome: Guacira Ramos" );
            sb.append( System.getProperty("line.separator"));
            sb.append("Whatsapp: (51) 99993-3706");
            sb.append( System.getProperty("line.separator"));
            sb.append("Email: retroentulho@hotmail.com");

        } else {

            sb.append("Nome: Karina Oliveira Roldão");
            sb.append( System.getProperty("line.separator"));
            sb.append("Whatsapp: (51) 98582-5844");
            sb.append( System.getProperty("line.separator"));
            sb.append("Email: entulhinho@gmail.com");
        }

        try {
            mailFactory.sendMessage(sb.toString());
        } catch (UnirestException e) {
            e.printStackTrace();
        }
    }
}

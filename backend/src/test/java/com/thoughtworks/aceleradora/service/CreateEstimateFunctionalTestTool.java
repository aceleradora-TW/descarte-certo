package com.thoughtworks.aceleradora.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.controller.request.RequesterRequest;
import com.thoughtworks.aceleradora.controller.request.ResidueAddressRequest;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

public class CreateEstimateFunctionalTestTool {

    private static final String URL_BACKEND = "http://localhost:8080/estimate";

    public static void main(String[] args) {
        try {
            //Requisicao em formato de classe
            EstimateRequest estimateRequest =
                    EstimateRequest.builder()
                            .requester(RequesterRequest.builder()
                                    .name("Leo")
                                    .build())
                            .residueAddress(ResidueAddressRequest.builder()
                                    .cep("00000000")
                                    .locationInfo("alguma coisa")
                                    .build())
                            .build();
            //Convertendo requisicao para JSON
            String jsonContent = new ObjectMapper().writeValueAsString(estimateRequest);
            System.out.println("-- Request JSON: \n" + jsonContent);

            //Configurando os headers do HTTO com conteudo enviado
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
            HttpEntity<String> request =
                    new HttpEntity<>(jsonContent, headers);

            //Enviando a requisicao e capturando a resposta
            ResponseEntity<String> response = new RestTemplate()
                    .postForEntity(URL_BACKEND, request, String.class);

            //mostrando a resposta
            System.out.println("-- Status response:" + response.getStatusCode());
            System.out.println("-- Response JSON:\n" + response.getBody());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

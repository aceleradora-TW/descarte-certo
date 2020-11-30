package com.thoughtworks.aceleradora.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.controller.request.RequesterRequest;
import com.thoughtworks.aceleradora.controller.request.ResidueAddressRequest;
import com.thoughtworks.aceleradora.controller.request.ResidueRequest;
import com.thoughtworks.aceleradora.entity.Residue;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

public class CreateEstimateFunctionalTestTool {

    private static final String URL_BACKEND = "http://localhost:8080/estimate";

    public static void main(String[] args) {
        try {

            EstimateRequest estimateRequest =
                    EstimateRequest.builder()
                            .requester(RequesterRequest.builder()
                                    .fullName("Leo")
                                    .cellphone("")
                                    .email("")
                                    .build())
                            .residueAddress(ResidueAddressRequest.builder()
                                    .cep("00000000")
                                    .locationInfo("alguma coisa")
                                    .build())
                            .residueRequest(
                                    ResidueRequest.builder()
                                            .residueAmount(1)
                                            .residueMensure("")
                                            .residueType("")
                                            .build())
                            .build();

            String jsonContent = new ObjectMapper().writeValueAsString(estimateRequest);
            System.out.println("-- Request JSON: \n" + jsonContent);


            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
            HttpEntity<String> request =
                    new HttpEntity<>(jsonContent, headers);


            ResponseEntity<String> response = new RestTemplate()
                    .postForEntity(URL_BACKEND, request, String.class);


            System.out.println("-- Status response:" + response.getStatusCode());
            System.out.println("-- Response JSON:\n" + response.getBody());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

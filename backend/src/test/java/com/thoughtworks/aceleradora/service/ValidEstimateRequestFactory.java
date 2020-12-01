package com.thoughtworks.aceleradora.service;

import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.controller.request.RequesterRequest;
import com.thoughtworks.aceleradora.controller.request.ResidueAddressRequest;
import com.thoughtworks.aceleradora.controller.request.ResidueRequest;

public class ValidEstimateRequestFactory {

    private ValidEstimateRequestFactory(){}

    public static EstimateRequest createValidRequest() {
        EstimateRequest estimateRequest = EstimateRequest.builder()
                .requester(RequesterRequest.builder()
                        .fullName("")
                        .cellphone("999999999")
                        .email("HodineyGatinho69@gmail.com")
                        .build())
                .residueAddress(ResidueAddressRequest.builder()
                        .cep("900000000")
                        .locationInfo("Tem Elevador")
                        .build())
                .residueRequest(ResidueRequest.builder()
                        .residueType("caliça")
                        .residueMensure("43m³")
                        .build())
                .build();
        return estimateRequest;
    }

}

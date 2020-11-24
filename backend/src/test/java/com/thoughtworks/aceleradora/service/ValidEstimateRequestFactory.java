package com.thoughtworks.aceleradora.service;

import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.controller.request.RequesterRequest;
import com.thoughtworks.aceleradora.controller.request.ResidueAddressRequest;

public class ValidEstimateRequestFactory {

    private ValidEstimateRequestFactory(){}

    public static EstimateRequest createValidRequest() {
        EstimateRequest estimateRequest = EstimateRequest.builder()
                .requester(RequesterRequest.builder()
                        .nameCompleted("Pedro")
                        .cellphone("999999999")
                        .email("HodineyGatinho69@gmail.com")
                        .build())
                .residueAddress(ResidueAddressRequest.builder()
                        .cep("900000000")
                        .locationInfo("Tem Elevador")
                        .build())
                .build();
        return estimateRequest;
    }

}

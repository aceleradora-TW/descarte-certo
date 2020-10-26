package com.thoughtworks.aceleradora.service;

import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.controller.request.RequesterRequest;
import com.thoughtworks.aceleradora.controller.request.ResidueAddressRequest;

public class ValidEstimateRequestFactory {

    private ValidEstimateRequestFactory(){}

    public static EstimateRequest createValidRequest() {
        EstimateRequest estimateRequest = EstimateRequest.builder()
                .requester(RequesterRequest.builder()
                        .name("Pedro")
                        .build())
                .residueAddress(ResidueAddressRequest.builder()
                        .cep("900000000")
                        .build())
                .build();
        return estimateRequest;
    }

}

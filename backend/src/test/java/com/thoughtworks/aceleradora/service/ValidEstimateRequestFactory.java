package com.thoughtworks.aceleradora.service;

import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.controller.request.RequesterRequest;
import com.thoughtworks.aceleradora.controller.request.ResidueAddressRequest;
import com.thoughtworks.aceleradora.controller.request.ResidueRequest;
import com.thoughtworks.aceleradora.entity.Estimate;
import com.thoughtworks.aceleradora.entity.Residue;
import com.thoughtworks.aceleradora.entity.ResidueAddress;

import java.util.Random;

public class ValidEstimateRequestFactory {

    private ValidEstimateRequestFactory(){}

    public static Estimate crateValidEstimate() {
        return Estimate.builder()
                .id(new Random().nextInt())
                .residue(Residue.builder().build())
                .residueAddress(ResidueAddress.builder().build())
                .build();
    }

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
                        .residueMeasure("43m³")
                        .build())
                .build();
        return estimateRequest;
    }

}

package com.thoughtworks.aceleradora.service;

import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.entity.Estimate;
import com.thoughtworks.aceleradora.entity.Requester;
import com.thoughtworks.aceleradora.entity.ResidueAddress;

public class EstimateConverterService {
    public Estimate converter(EstimateRequest request) {
        return Estimate
                .builder()
                .requester(
                        Requester.builder()
                                .name(request.getRequester().getName())
                                .build()
                )
                .residueAddress(ResidueAddress.builder()
                        .cep(request.getResidueAddress().getCep())
                        .build())
                .build();
    }
}

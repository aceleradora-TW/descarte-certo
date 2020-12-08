package com.thoughtworks.aceleradora.service;

import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.entity.Estimate;
import com.thoughtworks.aceleradora.entity.Requester;
import com.thoughtworks.aceleradora.entity.Residue;
import com.thoughtworks.aceleradora.entity.ResidueAddress;
import org.springframework.stereotype.Service;

@Service
public class EstimateConverterService {
    public Estimate converter(EstimateRequest request) {
        return Estimate
                .builder()
                .requester(Requester.builder()
                                .fullName(request.getRequester().getFullName())
                                .cellphone(request.getRequester().getCellphone())
                                .email(request.getRequester().getEmail())
                                .build()
                )
                .residueAddress(ResidueAddress.builder()
                        .cep(request.getResidueAddress().getCep())
                        .locationInfo(request.getResidueAddress().getLocationInfo())
                        .build()
                )
                .residue(Residue.builder()
                        .residueMeasure(request.getResidueRequest().getResidueMeasure())
                        .residueType(request.getResidueRequest().getResidueType())
                        .build()
                )
                .build();

    }
}

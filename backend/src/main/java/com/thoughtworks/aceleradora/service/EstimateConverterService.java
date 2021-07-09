package com.thoughtworks.aceleradora.service;

import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.entity.Estimate;
import com.thoughtworks.aceleradora.entity.Requester;
import com.thoughtworks.aceleradora.entity.Residue;
import com.thoughtworks.aceleradora.entity.ResidueAddress;
import org.springframework.stereotype.Service;
import java.time.LocalDate;

@Service
public class EstimateConverterService {
    public Estimate converter(EstimateRequest request) {
        return Estimate
                .builder()
                .requester(Requester.builder()
                                .fullName(request.getRequester().getName())
                                .cellphone(request.getRequester().getPhone())
                                .email(request.getRequester().getEmail())
                                .build()
                )
                .residueAddress(ResidueAddress.builder()
                        .region(request.getResidueAddress().getRegion())
                        .locationInfo(request.getResidueAddress().getLocationInfo())
                        .build()
                )
                .residue(Residue.builder()
                        .residueMeasure(request.getResidueRequest().getResidueMeasure())
                        .residueType(request.getResidueRequest().getResidueType())
                        .build()
                )
                .status(OrderStatus.CRIADO)
                .creationDate(LocalDate.now())
                .build();
    }
}

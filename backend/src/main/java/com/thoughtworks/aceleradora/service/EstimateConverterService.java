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
<<<<<<< HEAD
                .status("Criado")
=======
                .creationDate(LocalDate.now())
>>>>>>> d1d77c9509d898aaf7eb62cb67b78559ecffb392
                .build();

    }
}

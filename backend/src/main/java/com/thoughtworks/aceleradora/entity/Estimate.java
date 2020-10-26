package com.thoughtworks.aceleradora.entity;

import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "estimate")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Estimate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne(cascade=CascadeType.ALL)
    private Requester requester;

    @OneToOne(cascade=CascadeType.ALL)
    private ResidueAddress residueAddress;

    public static Estimate from(EstimateRequest request) {
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


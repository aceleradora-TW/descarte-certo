package com.thoughtworks.aceleradora.entity;

import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.controller.request.ResidueRequest;
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

    @OneToOne(cascade=CascadeType.ALL)
    private ResidueRequest residueRequest;
}


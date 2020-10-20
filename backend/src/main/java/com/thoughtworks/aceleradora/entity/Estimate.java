package com.thoughtworks.aceleradora.entity;

import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
//TODO trocar nome da tabela
//TODO ajustar atributos das tabelas com novas entidades
@Table(name = "generator")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Estimate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    public static Estimate from(EstimateRequest request) {
        return Estimate
                .builder()
                    .name(request.getRequester().getName())
                .build();
    }
}


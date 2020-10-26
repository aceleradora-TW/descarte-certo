package com.thoughtworks.aceleradora.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "residue_address")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ResidueAddress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String cep;
}

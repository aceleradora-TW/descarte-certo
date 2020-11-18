package com.thoughtworks.aceleradora.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "residue_address")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class ResidueAddress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Integer id;
    private String cep;
    private String locationInfo;
}

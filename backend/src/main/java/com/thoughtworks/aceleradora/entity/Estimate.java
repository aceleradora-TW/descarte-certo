package com.thoughtworks.aceleradora.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "estimate")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Estimate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Integer id;

    @OneToOne(cascade=CascadeType.ALL)
    private Requester requester;

    @OneToOne(cascade=CascadeType.ALL)
    private ResidueAddress residueAddress;
}


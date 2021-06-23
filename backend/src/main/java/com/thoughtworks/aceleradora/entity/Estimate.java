package com.thoughtworks.aceleradora.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

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

    @OneToOne(cascade =CascadeType.ALL)
    private Residue residue;

<<<<<<< HEAD
    @Column(name = "status")
    private String status;
=======
    @Column(name = "creation_date")
    private LocalDate creationDate;
>>>>>>> d1d77c9509d898aaf7eb62cb67b78559ecffb392
}


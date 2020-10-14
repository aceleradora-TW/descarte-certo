package com.thoughtworks.aceleradora.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "generator")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GeneratorEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
}


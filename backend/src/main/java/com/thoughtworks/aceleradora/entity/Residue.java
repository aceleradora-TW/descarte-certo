package com.thoughtworks.aceleradora.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
@Data
@Builder
@AllArgsConstructor
public class Residue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long residueId;
}

package com.thoughtworks.aceleradora.entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.persistence.*;

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

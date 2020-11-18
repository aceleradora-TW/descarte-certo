package com.thoughtworks.aceleradora.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "requester")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Requester {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nameCompleted;
    private String cellphone;
    private String email;
    
}

package com.thoughtworks.aceleradora.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table (name = "orderInfo")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class OrderInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Integer id;

}

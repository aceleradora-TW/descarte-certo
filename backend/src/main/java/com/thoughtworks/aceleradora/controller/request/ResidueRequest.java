package com.thoughtworks.aceleradora.controller.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ResidueRequest {
    private String residueType;
    private int residueAmount;
    private String residueMensure;
}

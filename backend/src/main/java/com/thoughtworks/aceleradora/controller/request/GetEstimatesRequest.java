package com.thoughtworks.aceleradora.controller.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetEstimatesRequest {

    @NotNull
    private String accessToken ;
    //TODO aqui pode ser colocado filtros de pesquisa vindo do frontend
}


package com.thoughtworks.aceleradora.controller.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
@AllArgsConstructor
public class SolicitacaoOrcamentoDescarteResponse {
    private int codigoSolicitacao;
}

package com.thoughtworks.aceleradora.controller;

import lombok.Data;

@Data
public class SolicitacaoOrcamentoDescarteRequest {
    private SolicitanteRequest solicitante;
    private EnderecoResidoRequest endereco;
}

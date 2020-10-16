package com.thoughtworks.aceleradora.controller;

import com.thoughtworks.aceleradora.domain.SolicitacaoOrcamentoDescarteService;
import com.thoughtworks.aceleradora.entity.SolicitacaoOrcamentoDescarte;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
public class SolicitacaoOrcamentoDescarteController {

    private SolicitacaoOrcamentoDescarteService solicitacaoOrcamentoDescarteService;

    public SolicitacaoOrcamentoDescarteController(SolicitacaoOrcamentoDescarteService solicitacaoOrcamentoDescarteService) {
        this.solicitacaoOrcamentoDescarteService = solicitacaoOrcamentoDescarteService;
    }

    @PostMapping(path = "/createSolicitacaoOrcamentoDescarte")
    public ResponseEntity save(@RequestBody SolicitacaoOrcamentoDescarteRequest solicitacaoOrcamentoDescarteRequest) {
        SolicitacaoOrcamentoDescarte solicitacao = solicitacaoOrcamentoDescarteService
                .saveGenerator(solicitacaoOrcamentoDescarteRequest);
        SolicitacaoOrcamentoDescarteResponse response = SolicitacaoOrcamentoDescarteResponse
                .builder()
                .codigoSolicitacao(solicitacao.getId())
                .build();
        return new ResponseEntity(response, HttpStatus.CREATED);
    }

    @GetMapping(path = "/getSolicitacaoOrcamentoDescarte")
    public ResponseEntity get(@RequestParam int codigoSolicitacao) {
        Optional<SolicitacaoOrcamentoDescarte> optionalSolicitacao
                = solicitacaoOrcamentoDescarteService.getSolicitacao(codigoSolicitacao);
        SolicitacaoOrcamentoDescarte solicitacao = optionalSolicitacao.get();
        //TODO ajustar optional
        //TODO ajustar para resposta HttpStatus correta
        return new ResponseEntity(solicitacao, HttpStatus.OK);
    }
}

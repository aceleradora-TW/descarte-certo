package com.thoughtworks.aceleradora.domain;

import com.thoughtworks.aceleradora.controller.SolicitacaoOrcamentoDescarteRequest;
import com.thoughtworks.aceleradora.entity.SolicitacaoOrcamentoDescarte;
import com.thoughtworks.aceleradora.repository.SolicitacaoOrcamentoDescarteRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class SolicitacaoOrcamentoDescarteService {

    private SolicitacaoOrcamentoDescarteRepository solicitacaoOrcamentoDescarteRepository;

    SolicitacaoOrcamentoDescarteService(SolicitacaoOrcamentoDescarteRepository repository) {
        this.solicitacaoOrcamentoDescarteRepository = repository;
    }

    public SolicitacaoOrcamentoDescarte saveGenerator(SolicitacaoOrcamentoDescarteRequest solicitacaoOrcamentoDescarteRequest) {
        SolicitacaoOrcamentoDescarte solicitacaoOrcamentoDescarte =
                SolicitacaoOrcamentoDescarte.builder()
                        .name(solicitacaoOrcamentoDescarteRequest.getSolicitante().getName())
                        .build();
        return solicitacaoOrcamentoDescarteRepository.save(solicitacaoOrcamentoDescarte);
    }

    public Optional<SolicitacaoOrcamentoDescarte> getSolicitacao(int codigo) {
        return solicitacaoOrcamentoDescarteRepository.findById(codigo);
    }
}

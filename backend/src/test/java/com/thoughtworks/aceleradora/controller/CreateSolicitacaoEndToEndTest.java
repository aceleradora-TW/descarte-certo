package com.thoughtworks.aceleradora.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.thoughtworks.aceleradora.controller.request.EnderecoResidoRequest;
import com.thoughtworks.aceleradora.controller.request.SolicitacaoOrcamentoDescarteRequest;
import com.thoughtworks.aceleradora.controller.request.SolicitanteRequest;
import org.junit.Test;

public class CreateSolicitacaoEndToEndTest {

    private static String URL = "http://localhost:8080/createSolicitacaoOrcamentoDescarte";

    @Test
    public void shouldCreateSolicitacaoWithSuccess() throws JsonProcessingException {
       var request = SolicitacaoOrcamentoDescarteRequest.builder()
                .endereco(EnderecoResidoRequest.builder()
                        .cep("00000000000")
                        .build()
                )
                .solicitante(SolicitanteRequest.builder()
                        .name("TestEndToEnd")
                        .build()
                )
                .build();
        ObjectMapper mapper = new ObjectMapper();
        var json = mapper.writeValueAsString(request);
        System.out.println(json);
//        ResponseEntity<SolicitacaoOrcamentoDescarteRequest> response
//                = new RestTemplate()
//                .postForEntity(URL, request, SolicitacaoOrcamentoDescarteRequest.class);
//
//        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
    }
}

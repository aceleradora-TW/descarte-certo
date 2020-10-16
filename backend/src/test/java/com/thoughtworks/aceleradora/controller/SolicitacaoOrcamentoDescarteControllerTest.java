package com.thoughtworks.aceleradora.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.thoughtworks.aceleradora.controller.request.EnderecoResidoRequest;
import com.thoughtworks.aceleradora.controller.request.SolicitacaoOrcamentoDescarteRequest;
import com.thoughtworks.aceleradora.controller.request.SolicitanteRequest;
import com.thoughtworks.aceleradora.domain.SolicitacaoOrcamentoDescarteService;
import com.thoughtworks.aceleradora.entity.SolicitacaoOrcamentoDescarte;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(MockitoJUnitRunner.class)
public class SolicitacaoOrcamentoDescarteControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private SolicitacaoOrcamentoDescarteService solicitacaoOrcamentoDescarteService;

    //@Test
    public void shouldCreateSolicitacaoWithSuccess() throws Exception {
        int expectedId = 100;

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

        when(solicitacaoOrcamentoDescarteService
                .create(request))
                .thenReturn(SolicitacaoOrcamentoDescarte.builder().id(expectedId).build());

        var mapper = new ObjectMapper();
        mockMvc.perform(
                post("/solicitacaoOrcamentoDescarte/create")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsBytes(request)))
                .andDo(print())
                .andExpect(status().is2xxSuccessful());

    }
}

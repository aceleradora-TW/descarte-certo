package com.thoughtworks.aceleradora.service;

import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.controller.request.RequesterRequest;
import com.thoughtworks.aceleradora.controller.request.ResidueAddressRequest;
import com.thoughtworks.aceleradora.entity.Estimate;
import junit.framework.TestCase;
import org.junit.Before;
import org.junit.Test;

import static com.thoughtworks.aceleradora.service.ValidEstimateRequestFactory.createValidRequest;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

public class EstimateConverterServiceTest {

    private EstimateConverterService estimateConverterService;

    @Before
    public void setUp() {
       estimateConverterService = new EstimateConverterService();
    }

    @Test
    public void shouldCreateEstimateWithRequestName() {
        //DADO uma requisição de solicitacao de orcamento valida (Estimate)
        String expectedRequesterName = "expectedRequesterNameValue";
        EstimateRequest validEstimateRequest = createValidRequest();
        validEstimateRequest.getRequester().setNameCompleted(expectedRequesterName);

        //QUANDO solicitado para converter essa requisicao para uma entidade
        Estimate estimateEntity = estimateConverterService.converter(validEstimateRequest);

        //ENTAO quero receber uma nova entidade de dominio com todos os campos convertidos
        assertThat(estimateEntity.getRequester().getNameCompleted()).isEqualTo(expectedRequesterName);
    }

    @Test
    public void shouldCreateEstimateConvertingTheRightCepAddress() {
        //DADO um endereco com um cep de residuo
        String expectedAddressCep = "9109020304";
        ResidueAddressRequest residueAddressRequest = ResidueAddressRequest.builder()
               .cep(expectedAddressCep)
               .build();
        //DADO que este endenreco esta numa requisicao valida
        EstimateRequest validEstimateRequest = createValidRequest();
        validEstimateRequest.setResidueAddress(residueAddressRequest);

        //QUANDO solicitado para converter essa requisicao para uma entidade
        Estimate estimateEntity = estimateConverterService.converter(validEstimateRequest);

        //ENTAO quero receber uma nova entidade de dominio com todos os campos convertidos
        assertThat(estimateEntity.getResidueAddress().getCep()).isEqualTo(expectedAddressCep);
    }

    @Test
    public void shouldCreateEstimateConvertingTheRightLocationInfo() {
        String expectedLocationInfo = "Tem Elevador";
        ResidueAddressRequest residueAddressRequest = ResidueAddressRequest.builder()
                .locationInfo(expectedLocationInfo)
                .build();

        EstimateRequest validEstimateRequest = createValidRequest();
        validEstimateRequest.setResidueAddress(residueAddressRequest);

        Estimate estimateEntity = estimateConverterService.converter(validEstimateRequest);

        assertThat(estimateEntity.getResidueAddress().getLocationInfo()).isEqualTo(expectedLocationInfo);
    }

}

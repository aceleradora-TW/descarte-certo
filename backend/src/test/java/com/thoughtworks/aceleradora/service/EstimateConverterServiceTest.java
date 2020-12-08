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
        String expectedRequesterName = "Pedro";
        EstimateRequest validEstimateRequest = createValidRequest();
        validEstimateRequest.getRequester().setFullName(expectedRequesterName);

        Estimate estimateEntity = estimateConverterService.converter(validEstimateRequest);

        assertThat(estimateEntity.getRequester().getFullName()).isEqualTo(expectedRequesterName);
    }

    @Test
    public void shouldCreateEstimateConvertingTheRightCepAddress() {

        String expectedAddressCep = "9109020304";
        ResidueAddressRequest residueAddressRequest = ResidueAddressRequest.builder()
               .cep(expectedAddressCep)
               .build();

        EstimateRequest validEstimateRequest = createValidRequest();
        validEstimateRequest.setResidueAddress(residueAddressRequest);


        Estimate estimateEntity = estimateConverterService.converter(validEstimateRequest);


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

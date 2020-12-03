package com.thoughtworks.aceleradora.service;

import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.entity.Estimate;
import com.thoughtworks.aceleradora.entity.Requester;
import com.thoughtworks.aceleradora.entity.Residue;
import com.thoughtworks.aceleradora.entity.ResidueAddress;
import com.thoughtworks.aceleradora.repository.EstimateRepository;
import org.junit.Before;
import org.junit.Test;
import org.mockito.invocation.InvocationOnMock;
import static org.assertj.core.api.Java6Assertions.assertThat;
import static com.thoughtworks.aceleradora.service.ValidEstimateRequestFactory.createValidRequest;
import static org.mockito.Mockito.*;

public class EstimateServiceTest {

    private EstimateService estimateService;
    private EstimateConverterService estimateConverterServiceMock;
    private EstimateRepository estimateRepositoryMock;
    private MailFactory mailFactoryMock;
    @Before
    public void setUp() {
        estimateConverterServiceMock = mock(EstimateConverterService.class);
        estimateRepositoryMock = mock(EstimateRepository.class);
        mailFactoryMock=mock(MailFactory.class);
        estimateService = new EstimateService(estimateRepositoryMock, estimateConverterServiceMock,mailFactoryMock);
    }
        @Test
        public void shouldConvertAndSaveEstimateOnCreateWithRequest() throws UnirestException {
            EstimateRequest validRequest = createValidRequest();

            Requester requester= Requester.builder().fullName("Rosa").cellphone("999999999").email("va@van").build();
            Residue residue = Residue.builder().id(1).residueMeasure("").residueType("").build();
            ResidueAddress residueAddress= ResidueAddress.builder().cep("").locationInfo("").id(1).build();
            Estimate expectedEstimateCreated = Estimate.builder().id(1).requester(requester).residue(residue).residueAddress(residueAddress).build();
            when(estimateConverterServiceMock.converter(validRequest))
                    .thenReturn(expectedEstimateCreated);

            when(estimateRepositoryMock.save(any())).thenAnswer(
                    (InvocationOnMock invocation) -> invocation.getArguments()[0]);

            JsonNode jsonNode=new JsonNode("[]");
            when(mailFactoryMock.sendMessage(anyString())).thenReturn(jsonNode);

            Estimate estimateEntity = estimateService.create(validRequest);

            verify(estimateRepositoryMock, times(1)).save(estimateEntity);
            verify(estimateConverterServiceMock, times(1)).converter(validRequest);
            verify(mailFactoryMock,times(1)).sendMessage(anyString());
            assertThat(estimateEntity).isEqualTo(expectedEstimateCreated);
        }
}


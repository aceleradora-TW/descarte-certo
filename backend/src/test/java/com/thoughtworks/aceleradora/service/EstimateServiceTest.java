package com.thoughtworks.aceleradora.service;


import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.entity.Estimate;
import com.thoughtworks.aceleradora.repository.EstimateRepository;
import org.junit.Before;
import org.junit.Test;
import org.mockito.invocation.InvocationOnMock;

import static com.thoughtworks.aceleradora.service.ValidEstimateRequestFactory.createValidRequest;
import static org.assertj.core.api.Java6Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class EstimateServiceTest {

    private EstimateService estimateService;
    private EstimateConverterService estimateConverterServiceMock;
    private EstimateRepository estimateRepositoryMock;
    private MailFactory mailFactory;

    @Before
    public void setUp() {
        estimateConverterServiceMock = mock(EstimateConverterService.class);
        estimateRepositoryMock = mock(EstimateRepository.class);
        estimateService = new EstimateService(estimateRepositoryMock, estimateConverterServiceMock, mailFactory);
    }

    @Test
    public void shouldConvertAndSaveEstimateOnCreateWithRequest() {
        //DADO uma requisicao VALIDA
        EstimateRequest validRequest = createValidRequest();

        //DADO que o estimateConverterServiceMock esta respondendo corretamente uma Estimate Entity
        Estimate expectedEstimateCreated = Estimate.builder().build();
        when(estimateConverterServiceMock.converter(validRequest))
                .thenReturn(expectedEstimateCreated);

        //DADO que o respository retorna uma entidade apos salvar
        when(estimateRepositoryMock.save(any())).thenAnswer(
                (InvocationOnMock invocation) -> invocation.getArguments()[0]);

        //QUANDO pedido para criar uma Estimate
        Estimate estimateEntity = estimateService.create(validRequest);

        //ENTAO deve converter e chamar o metodo save do Respository
        verify(estimateRepositoryMock, times(1)).save(estimateEntity);
        verify(estimateConverterServiceMock, times(1)).converter(validRequest);
        assertThat(estimateEntity).isEqualTo(expectedEstimateCreated);
    }

}

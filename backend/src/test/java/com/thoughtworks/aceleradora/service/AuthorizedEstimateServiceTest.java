package com.thoughtworks.aceleradora.service;

import com.thoughtworks.aceleradora.controller.request.GetEstimatesRequest;
import com.thoughtworks.aceleradora.entity.Estimate;
import com.thoughtworks.aceleradora.exception.AccessTokenDeniedExeption;
import com.thoughtworks.aceleradora.repository.AccessTokenRepository;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Java6Assertions.assertThat;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class AuthorizedEstimateServiceTest {

    private AuthorizedEstimateService authorizedEstimateService;
    private AccessTokenRepository accessTokenRepository;
    private EstimateService estimateService;

    @Before
    public void setUp() {
        accessTokenRepository = mock(AccessTokenRepository.class);
        estimateService = mock(EstimateService.class);
        authorizedEstimateService = new AuthorizedEstimateService(estimateService, accessTokenRepository);
    }

    @Test
    public void shouldReturnAllTheEstimatesIfAuthorized() {
       ArrayList<Estimate> expectedEstimates = new ArrayList<>();
        expectedEstimates.add(ValidEstimateRequestFactory.crateValidEstimate());
        expectedEstimates.add(ValidEstimateRequestFactory.crateValidEstimate());
        expectedEstimates.add(ValidEstimateRequestFactory.crateValidEstimate());
        when(accessTokenRepository.isTokenAuthorized(anyString())).thenReturn(true);
        when(estimateService.getAllEstimates()).thenReturn(expectedEstimates);
        GetEstimatesRequest getEstimatesRequest = new GetEstimatesRequest("valid-token");
        List<Estimate> estimatesReturned = authorizedEstimateService.getEstimatesIfAuthorized(getEstimatesRequest);
        assertThat(estimatesReturned).isEqualTo(expectedEstimates);
    }

    @Test(expected = AccessTokenDeniedExeption.class)
    public void shouldThrowAccessTokenDeniedExeptionWhenTokenIsInvalid() {
        when(accessTokenRepository.isTokenAuthorized(anyString())).thenReturn(false);
        GetEstimatesRequest getEstimatesRequest = new GetEstimatesRequest("invalid-token");
        authorizedEstimateService.getEstimatesIfAuthorized(getEstimatesRequest);
    }
}
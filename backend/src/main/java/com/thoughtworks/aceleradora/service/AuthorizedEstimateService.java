package com.thoughtworks.aceleradora.service;

import com.thoughtworks.aceleradora.controller.request.GetEstimatesRequest;
import com.thoughtworks.aceleradora.entity.Estimate;
import com.thoughtworks.aceleradora.exception.AccessTokenDeniedExeption;
import com.thoughtworks.aceleradora.repository.AccessTokenRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorizedEstimateService {

    private EstimateService estimateService;
    private AccessTokenRepository accessTokenRepository;

    public AuthorizedEstimateService(EstimateService estimateService, AccessTokenRepository accessTokenRepository) {
        this.estimateService = estimateService;
        this.accessTokenRepository = accessTokenRepository;
    }

    public List<Estimate> getEstimatesIfAuthorized(GetEstimatesRequest getEstimatesRequest) {
        if (!accessTokenRepository.isTokenAuthorized(getEstimatesRequest.getAccessToken())) {
          throw new AccessTokenDeniedExeption("Token passado nao é valido");
        }
        //TODO aqui pode ser passado filtros de pesquisa vindo do frontend
        return estimateService.getAllEstimates();
    }
}

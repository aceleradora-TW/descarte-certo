package com.thoughtworks.aceleradora.service;

import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.entity.Estimate;
import com.thoughtworks.aceleradora.repository.EstimateRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EstimateService {

    private EstimateRepository estimateRepository;
    private EstimateConverterService estimateConverterService;

    EstimateService(EstimateRepository repository, EstimateConverterService estimateConverter) {
        this.estimateRepository = repository;
        this.estimateConverterService = estimateConverter;
    }

    public Estimate create(EstimateRequest estimateRequest) {
        return estimateRepository.save(estimateConverterService.converter(estimateRequest));
    }

    public Optional<Estimate> getEstimate(int codigo) {
        return estimateRepository.findById(codigo);
    }
}

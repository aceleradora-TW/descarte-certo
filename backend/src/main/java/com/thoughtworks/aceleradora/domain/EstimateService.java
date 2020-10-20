package com.thoughtworks.aceleradora.domain;

import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.entity.Estimate;
import com.thoughtworks.aceleradora.repository.EstimateRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

import static com.thoughtworks.aceleradora.entity.Estimate.from;

@Service
public class EstimateService {

    private EstimateRepository estimateRepository;

    EstimateService(EstimateRepository repository) {
        this.estimateRepository = repository;
    }

    public Estimate create(EstimateRequest estimateRequest) {
        return estimateRepository.save(from(estimateRequest));
    }

    public Optional<Estimate> getEstimate(int codigo) {
        return estimateRepository.findById(codigo);
    }
}

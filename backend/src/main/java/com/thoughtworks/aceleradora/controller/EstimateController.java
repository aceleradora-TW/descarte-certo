package com.thoughtworks.aceleradora.controller;

import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.controller.response.EstimateResponse;
import com.thoughtworks.aceleradora.service.EstimateService;
import com.thoughtworks.aceleradora.entity.Estimate;
import com.thoughtworks.aceleradora.exception.EstimateNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.thoughtworks.aceleradora.repository.EstimateRepository;
import java.util.Optional;



@RestController
@RequestMapping("/estimate")
public class EstimateController {

    private EstimateService estimateService;

    private  EstimateRepository estimateRepository;

    public EstimateController(EstimateService estimateService) { this.estimateService = estimateService; }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public EstimateResponse create(@RequestBody EstimateRequest estimateRequest) {
        Estimate estimateEntity = estimateService.create(estimateRequest);
        return EstimateResponse.builder()
                .estimateCode(estimateEntity.getId())
                .build();
    }

    @GetMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Estimate get(@PathVariable int id) {
        return estimateService
                .getEstimate(id)
                .orElseThrow(() -> new EstimateNotFoundException(id));
    }

    @PutMapping(path = "/{id}/confirm")
    @ResponseStatus(HttpStatus.OK)
    public Estimate confirm(@PathVariable int id) {
        return estimateService
                .updateStatus(id);
    }

    @GetMapping(path = "/all")
    @ResponseStatus(HttpStatus.OK)
    public Page<Estimate> getAll(
            @RequestParam Optional<Integer> page,
            @RequestParam Optional<String> sortBy
    ) {
        return estimateRepository.findAll(
                PageRequest.of(
                        page.orElse(0),
                        20,
                        Sort.Direction.ASC, sortBy.orElse("id")
                )
        );
    }


}
/*
* estimateService
                   .getAllEstimates();
* */
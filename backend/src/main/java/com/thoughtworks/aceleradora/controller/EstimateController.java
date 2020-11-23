package com.thoughtworks.aceleradora.controller;

import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.controller.response.EstimateResponse;
import com.thoughtworks.aceleradora.service.EstimateService;
import com.thoughtworks.aceleradora.entity.Estimate;
import com.thoughtworks.aceleradora.exception.EstimateNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import static com.thoughtworks.aceleradora.controller.response.EstimateResponse.from;

@RestController
@RequestMapping("/estimate")
public class EstimateController {

    private EstimateService estimateService;

    public EstimateController(EstimateService estimateService) {
        this.estimateService = estimateService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public EstimateResponse create(@RequestBody EstimateRequest estimateRequest) {

        return from(estimateService.create(estimateRequest));
    }

    @GetMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Estimate get(@PathVariable int id) {
        return estimateService
                .getEstimate(id)
                .orElseThrow(() -> new EstimateNotFoundException(id));
    }
}

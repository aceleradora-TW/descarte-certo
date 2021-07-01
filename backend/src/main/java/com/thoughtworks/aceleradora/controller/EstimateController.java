package com.thoughtworks.aceleradora.controller;

import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.controller.response.EstimateResponse;
import com.thoughtworks.aceleradora.service.Authorize;
import com.thoughtworks.aceleradora.service.EstimateService;
import com.thoughtworks.aceleradora.entity.Estimate;
import com.thoughtworks.aceleradora.exception.EstimateNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.GET;
import java.util.Optional;



@RestController
@RequestMapping("/estimate")
public class EstimateController {

    private EstimateService estimateService;

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

    @Authorize
    @GET
    @GetMapping(path = "/all")
    @ResponseStatus(HttpStatus.OK)
    public Page<Estimate> getAll(
            @RequestParam Optional<Integer> page,
            @RequestParam Optional<Integer> totalPage,
            @RequestParam Optional<String> sortBy
    ) {

        return estimateService
                .getAllEstimates(page, sortBy, totalPage);
    }
}

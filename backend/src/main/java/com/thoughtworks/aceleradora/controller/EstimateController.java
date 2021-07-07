package com.thoughtworks.aceleradora.controller;

import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.controller.response.EstimateResponse;
import com.thoughtworks.aceleradora.exception.AccessTokenDeniedException;
import com.thoughtworks.aceleradora.service.AuthenticationService;
import com.thoughtworks.aceleradora.service.EstimateService;
import com.thoughtworks.aceleradora.entity.Estimate;
import com.thoughtworks.aceleradora.exception.EstimateNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
        Estimate estimate = estimateService.updateStatus(id);

        if (estimate.getResidue().getResidueMeasure().contains("Caçamba")){
            //retroentulho@hotmail.com
            estimateService.sendEmail(estimate,"5mariasteste1@gmail.com");
            // Senha do email teste1: 123456maria

        } else {
            //entulhinho@gmail.com ...
            estimateService.sendEmail(estimate,"5mariasteste2@gmail.com");
            // Senha do email teste2: 123456maria
        }
        estimateService.sendEmail(estimate, estimate.getRequester().getEmail());

        return estimate;
    }



    @GetMapping(path = "/all")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Page<Estimate>> getAll(
            @RequestHeader(name="Authorization") String token,
            @RequestParam Optional<Integer> page,
            @RequestParam Optional<Integer> totalPage,
            @RequestParam Optional<String> sortBy
    ) {
        try {
            AuthenticationService authenticationService = new AuthenticationService();
            if (!authenticationService.validToken(token)) {
               throw new AccessTokenDeniedException("Token inválido");
            }
            Page<Estimate> estimates = estimateService.getAllEstimates(page, sortBy, totalPage);
            return ResponseEntity.ok(estimates);
        } catch (AccessTokenDeniedException e) {
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .build();
        }

    }
}
package com.thoughtworks.aceleradora.controller;

import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.entity.Estimate;
import com.thoughtworks.aceleradora.exception.AccessTokenDeniedException;
import com.thoughtworks.aceleradora.service.AuthenticationService;
import com.thoughtworks.aceleradora.service.EstimateService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/estimate")
public class EstimateController {

    private EstimateService estimateService;
    private AuthenticationService authenticationService;

    public EstimateController(EstimateService estimateService, AuthenticationService authenticationService) { this.estimateService = estimateService;
        this.authenticationService = authenticationService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Estimate create(@RequestBody EstimateRequest estimateRequest) {
        Estimate estimateEntity = estimateService.create(estimateRequest);
        return estimateEntity;
    }

    @PutMapping(path = "/{id}/confirm")
    @ResponseStatus(HttpStatus.OK)
    public String confirm(@PathVariable int id) {
        Estimate estimate = estimateService.updateStatus(id);
        if (estimate.getResidue().getResidueMeasure().contains("Caçamba")){
            estimateService.sendEmail(estimate,"5mariasteste1@gmail.com");
        } else {
            estimateService.sendEmail(estimate,"5mariasteste2@gmail.com");
        }
        estimateService.sendEmail(estimate, estimate.getRequester().getEmail());
        return "Orçamento confirmado";
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

package com.thoughtworks.aceleradora.controller;

import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.controller.request.GetEstimatesRequest;
import com.thoughtworks.aceleradora.controller.response.EstimateResponse;
import com.thoughtworks.aceleradora.exception.AccessTokenDeniedExeption;
import com.thoughtworks.aceleradora.service.AuthorizedEstimateService;
import com.thoughtworks.aceleradora.service.EstimateService;
import com.thoughtworks.aceleradora.entity.Estimate;
import com.thoughtworks.aceleradora.exception.EstimateNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;


@RestController
@RequestMapping("/estimate")
public class EstimateController {

    private EstimateService estimateService;
    private AuthorizedEstimateService authorizedEstimateService;

    public EstimateController(EstimateService estimateService, AuthorizedEstimateService authorizedEstimateService) {
        this.estimateService = estimateService;
        this.authorizedEstimateService = authorizedEstimateService;
    }

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

    @GetMapping(path = "/all")
    public ResponseEntity<List<Estimate>> getAll(@RequestParam(name = "accesstoken") String accesstoken) {
        try {
            List<Estimate> estimates =
                    authorizedEstimateService.getEstimatesIfAuthorized(
                            GetEstimatesRequest.builder()
                                    .accessToken(accesstoken)
                                    .build());
            return ResponseEntity.ok(estimates);
        } catch (AccessTokenDeniedExeption e) {
            //Existem outros mecanismos no spring para lidar com exeptions no controller
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .build();
        }
    }



}

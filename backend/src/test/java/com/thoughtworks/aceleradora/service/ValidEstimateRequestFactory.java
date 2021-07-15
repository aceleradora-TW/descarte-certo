package com.thoughtworks.aceleradora.service;

import com.thoughtworks.aceleradora.controller.request.CalculateRequest;
import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.controller.request.RequesterRequest;
import com.thoughtworks.aceleradora.controller.request.ResidueAddressRequest;
import com.thoughtworks.aceleradora.controller.request.ResidueRequest;
import com.thoughtworks.aceleradora.service.bagCalculator.FloorAccess;
import com.thoughtworks.aceleradora.service.bucketcalculator.BucketZones;
import com.thoughtworks.aceleradora.service.bucketcalculator.Materials;
import com.thoughtworks.aceleradora.service.estimateCalculator.ServiceType;

public class ValidEstimateRequestFactory {

    private ValidEstimateRequestFactory(){}

    public static EstimateRequest createValidRequest() {
        EstimateRequest estimateRequest = EstimateRequest.builder()
                .requester(RequesterRequest.builder()
                        .fullName("")
                        .cellphone("999999999")
                        .email("HodineyGatinho69@gmail.com")
                        .build())
                .residueAddress(ResidueAddressRequest.builder()
                        .region("900000000")
                        .locationInfo("Tem Elevador")
                        .build())
                .residueRequest(ResidueRequest.builder()
                        .residueType("caliça")
                        .residueMeasure("43m³")
                        .build())
                .calculate(CalculateRequest.builder()
                        .amount(60)
                        .access(FloorAccess.HARD_ACCESS)
                        .zones(BucketZones.DOWNTOWN)
                        .type(ServiceType.BAG)
                        .material(Materials.WOOD)
                        .build())
                .build();
        return estimateRequest;
    }

}

package com.thoughtworks.aceleradora.controller.request;

import com.thoughtworks.aceleradora.service.bagCalculator.FloorAccess;
import com.thoughtworks.aceleradora.service.bucketcalculator.BucketZones;
import com.thoughtworks.aceleradora.service.bucketcalculator.Materials;
import com.thoughtworks.aceleradora.service.estimateCalculator.ServiceType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CalculateRequest {
    private int amount;
    private FloorAccess access;
    private BucketZones zones;
    private ServiceType type;
    private Materials material;
}

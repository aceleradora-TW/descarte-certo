package com.thoughtworks.aceleradora.controller.request;

import com.thoughtworks.aceleradora.service.bucketcalculator.BucketZones;
import com.thoughtworks.aceleradora.service.bucketcalculator.Materials;
import com.thoughtworks.aceleradora.service.quickestimates.FloorAccess;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CalculateRequest {
    private BigDecimal amount;
    private FloorAccess access;
    private Materials materials;
    private BucketZones zones;
}

package com.thoughtworks.aceleradora.service.bucketcalculator;

import java.math.BigDecimal;

import static com.thoughtworks.aceleradora.service.bucketcalculator.BucketZones.DOWNTOWN;
import static com.thoughtworks.aceleradora.service.bucketcalculator.BucketZones.SOUTH_ZONE;
import static com.thoughtworks.aceleradora.service.bucketcalculator.Materials.MIXED;
import static com.thoughtworks.aceleradora.service.bucketcalculator.Materials.PLASTER;
import static com.thoughtworks.aceleradora.service.bucketcalculator.Materials.RUBBLE;

public class BucketCalculator {

    public BigDecimal calculateBucketEstimate(BucketEstimateParameters params) {
        BigDecimal bucketAmount = new BigDecimal(params.getBucketAmount());

        if (params.getBucketZones() == DOWNTOWN || params.getBucketZones() == SOUTH_ZONE || params.getMaterials() == MIXED) {
            return new BigDecimal("350").multiply(bucketAmount);
        }

        if (params.getMaterials() == RUBBLE) {
            return new BigDecimal("250").multiply(bucketAmount);
        }

        return new BigDecimal("300").multiply(bucketAmount);
    }
}
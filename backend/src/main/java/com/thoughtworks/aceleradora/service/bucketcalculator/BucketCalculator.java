package com.thoughtworks.aceleradora.service.bucketcalculator;

import java.math.BigDecimal;

import static com.thoughtworks.aceleradora.service.bucketcalculator.BucketZones.DOWNTOWN;
import static com.thoughtworks.aceleradora.service.bucketcalculator.BucketZones.SOUTH_ZONE;
import static com.thoughtworks.aceleradora.service.bucketcalculator.Materials.MIXED;
import static com.thoughtworks.aceleradora.service.bucketcalculator.Materials.PLASTER;
import static com.thoughtworks.aceleradora.service.bucketcalculator.Materials.RUBBLE;

public class BucketCalculator {
    public static void main(String[] args) {
        BucketCalculator calculator = new BucketCalculator();
        BucketEstimateParameters params = new BucketEstimateParameters(2, DOWNTOWN, PLASTER);
        BigDecimal result = calculator.calculateBucketEstimate(params);
        System.out.println(result);
    }

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
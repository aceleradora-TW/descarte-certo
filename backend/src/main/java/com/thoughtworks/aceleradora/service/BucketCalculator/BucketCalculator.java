package com.thoughtworks.aceleradora.service.BucketCalculator;

import java.math.BigDecimal;

import static com.thoughtworks.aceleradora.service.BucketCalculator.BucketZones.*;
import static com.thoughtworks.aceleradora.service.BucketCalculator.Materials.*;

public class BucketCalculator {
    public static void main(String[] args) {
        BucketCalculator calculator = new BucketCalculator();
        BucketEstimateParameters params = new BucketEstimateParameters(2, OUTHERZONES, PLASTER);
        BigDecimal result = calculator.calculateBucketEstimate(params);
        System.out.println(result);
    }

    public BigDecimal calculateBucketEstimate(BucketEstimateParameters params) {
        if (params.getBucketZones() == DONWTOWN || params.getBucketZones() == SOUTHZONE || params.getMaterials() == MIXED) {
            return new BigDecimal("350").multiply(new BigDecimal(Integer.toString(params.getBucketAmount())));
        }
        if(params.getMaterials() == RUBBLE){
            return new BigDecimal("250").multiply(new BigDecimal(Integer.toString(params.getBucketAmount())));
        }
        return new BigDecimal("300").multiply(new BigDecimal(Integer.toString(params.getBucketAmount())));
    }
}
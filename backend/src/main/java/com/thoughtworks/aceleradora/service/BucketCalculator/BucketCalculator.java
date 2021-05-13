package com.thoughtworks.aceleradora.service.BucketCalculator;

import java.math.BigDecimal;

public class BucketCalculator {
    public BigDecimal BucketCalculator(BucketEstimateParameters params) {
        Double TripVallue1;
        Double TripVallue2;
        Double TripVallue3;
        return BigDecimal.ZERO;
    }


    public static void main(String[] args) {

        BucketCalculator calculator = new BucketCalculator();

        BucketEstimateParameters params = new BucketEstimateParameters(1,BucketZones.DONWTOWN ,Materials.WOOD);

        BigDecimal result = calculator.BucketCalculator(params);

        System.out.println(result);

    }


}
package com.thoughtworks.aceleradora.service.BucketCalculator;

import java.math.BigDecimal;

import static com.thoughtworks.aceleradora.service.BucketCalculator.BucketZones.*;
import static com.thoughtworks.aceleradora.service.BucketCalculator.Materials.*;

public class BucketCalculator {

    public static void main(String[] args) {

        BucketCalculator calculator = new BucketCalculator();

        BucketEstimateParameters params = new BucketEstimateParameters(1, SOUTHZONE ,Materials.WOOD);

        BigDecimal result = calculator.calculateBucketEstimate(params);

        System.out.println(result);

    }

    private BigDecimal calculateBucketEstimate(BucketEstimateParameters params) {


        int Numerodecacambas = params.getBucketAmount();
        if (params.getBucketZones() == DONWTOWN || params.getBucketZones() == SOUTHZONE){
            int Vallues = 350;
            return new BigDecimal(Vallues).multiply(int.toString(params.));


        }





        return BigDecimal.ZERO;
    }


}
package com.thoughtworks.aceleradora.service.estimateCalculator;

import com.thoughtworks.aceleradora.controller.request.CalculateRequest;
import com.thoughtworks.aceleradora.service.bagCalculator.BagCalculator;
import com.thoughtworks.aceleradora.service.bagCalculator.BagEstimateParameters;
import com.thoughtworks.aceleradora.service.bucketcalculator.BucketCalculator;
import com.thoughtworks.aceleradora.service.bucketcalculator.BucketEstimateParameters;
import java.math.BigDecimal;

public class EstimateCalculator {
    private BagCalculator bagCalculator;
    private BucketCalculator bucketCalculator;

    public EstimateCalculator() {
        this.bagCalculator = new BagCalculator();
        this.bucketCalculator = new BucketCalculator();
    }

    public BigDecimal calculate(CalculateRequest params){
        System.out.println(params.toString());
        if (params.getType().equals(ServiceType.BAG)) {
            BagEstimateParameters bagParams = new BagEstimateParameters(params.getAmount(), params.getAccess(), params.getMaterial());
            return bagCalculator.calculateEstimate(bagParams);
        }

        BucketEstimateParameters bucketParams= new BucketEstimateParameters(params.getAmount(), params.getZones(), params.getMaterial());
        return bucketCalculator.calculateBucketEstimate(bucketParams);
    }
}

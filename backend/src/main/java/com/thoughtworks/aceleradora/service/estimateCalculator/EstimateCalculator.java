package com.thoughtworks.aceleradora.service.estimateCalculator;

import com.thoughtworks.aceleradora.controller.request.CalculateRequest;
import com.thoughtworks.aceleradora.service.bagCalculator.BagCalculator;
import com.thoughtworks.aceleradora.service.bagCalculator.BagEstimateParameters;
import com.thoughtworks.aceleradora.service.bucketcalculator.BucketCalculator;
import com.thoughtworks.aceleradora.service.bucketcalculator.BucketEstimateParameters;
import java.math.BigDecimal;

public class EstimateCalculator {

    public BigDecimal calculate(CalculateRequest params){

        if (params.getType().equals(ServiceType.BAG)) {
            BagCalculator calculator = new BagCalculator();
            BagEstimateParameters bagParams = new BagEstimateParameters(params.getAmount(), params.getAccess(), params.getMaterial());
            return calculator.calculateEstimate(bagParams);
        }

        BucketCalculator calculator = new BucketCalculator();
        BucketEstimateParameters bucketParams= new BucketEstimateParameters(params.getAmount(), params.getZones(), params.getMaterial());
        return calculator.calculateBucketEstimate(bucketParams);
    }
}

package com.thoughtworks.aceleradora.controller;

import com.thoughtworks.aceleradora.service.BucketCalculator.BucketCalculator;
import com.thoughtworks.aceleradora.service.BucketCalculator.BucketEstimateParameters;
import com.thoughtworks.aceleradora.service.BucketCalculator.BucketZones;
import com.thoughtworks.aceleradora.service.BucketCalculator.Materials;
import com.thoughtworks.aceleradora.service.quickestimates.BagEstimateParameters;
import com.thoughtworks.aceleradora.service.quickestimates.FloorAccess;
import com.thoughtworks.aceleradora.service.quickestimates.QuickEstimateCalculator;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@RequestMapping("/quick_estimate")
public class QuickEstimatesController {
    @GetMapping("/bags")
    public BigDecimal returnEstimateBag(
            @RequestParam("amount") int amount,
            @RequestParam("access") FloorAccess access,
            @RequestParam("materials") Materials materials){

            QuickEstimateCalculator calculator = new QuickEstimateCalculator();

            BagEstimateParameters params = new BagEstimateParameters(amount, access, materials);

            BigDecimal result = calculator.calculateEstimate(params);

            return result;

    }

    @GetMapping("/bucket")
    public BigDecimal returnEstimateBucket(
            @RequestParam("amount") int amount,
            @RequestParam("zone")BucketZones zone,
            @RequestParam("materials") Materials materials){

            BucketCalculator calculator = new BucketCalculator();

            BucketEstimateParameters params = new BucketEstimateParameters(amount, zone, materials);

            BigDecimal result = calculator.calculateBucketEstimate(params);

            return result;
    }

}

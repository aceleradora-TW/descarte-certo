package com.thoughtworks.aceleradora.controller;

import com.thoughtworks.aceleradora.service.bucketcalculator.BucketCalculator;
import com.thoughtworks.aceleradora.service.bucketcalculator.BucketEstimateParameters;
import com.thoughtworks.aceleradora.service.bucketcalculator.BucketZones;
import com.thoughtworks.aceleradora.service.bucketcalculator.Materials;
import com.thoughtworks.aceleradora.service.quickestimates.BagEstimateParameters;
import com.thoughtworks.aceleradora.service.quickestimates.FloorAccess;
import com.thoughtworks.aceleradora.service.quickestimates.QuickEstimateCalculator;
import com.thoughtworks.aceleradora.service.quickestimates.BagEstimate;
import com.thoughtworks.aceleradora.service.bucketcalculator.BucketEstimate;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@RequestMapping("/quick_estimate")
public class QuickEstimatesController {
    @GetMapping("/bags")
    public BagEstimate returnEstimateBag(
            @RequestParam("amount") int amount,
            @RequestParam("access") FloorAccess access,
            @RequestParam("materials") Materials materials){

            QuickEstimateCalculator calculator = new QuickEstimateCalculator();

            BagEstimateParameters params = new BagEstimateParameters(amount, access, materials);

            BigDecimal value = calculator.calculateEstimate(params);

            BagEstimate estimate = new BagEstimate(materials, value);

            return estimate;

    }

    @GetMapping("/bucket")
    public BucketEstimate returnEstimateBucket(
            @RequestParam("amount") int amount,
            @RequestParam("zone")BucketZones zone,
            @RequestParam("materials") Materials materials){

            BucketCalculator calculator = new BucketCalculator();

            BucketEstimateParameters params = new BucketEstimateParameters(amount, zone, materials);

            BigDecimal value = calculator.calculateBucketEstimate(params);

            BucketEstimate estimate = new BucketEstimate(materials, value);

            return estimate;
    }

}

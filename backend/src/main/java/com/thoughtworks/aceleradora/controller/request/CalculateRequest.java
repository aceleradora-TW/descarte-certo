package com.thoughtworks.aceleradora.controller.request;

import com.thoughtworks.aceleradora.service.bagCalculator.FloorAccess;
import com.thoughtworks.aceleradora.service.bucketcalculator.BucketZones;
import com.thoughtworks.aceleradora.service.bucketcalculator.Materials;
import com.thoughtworks.aceleradora.service.estimateCalculator.ServiceType;


public class CalculateRequest {


    private int amount;
    private FloorAccess access;
    private BucketZones zones;
    private ServiceType type;
    private Materials material;

    public int getAmount() {
        return amount;
    }

    public FloorAccess getAccess() {
        return access;
    }

    public BucketZones getZones() {
        return zones;
    }

    public ServiceType getType() {
        return type;
    }

    public Materials getMaterial() {
        return material;
    }
}

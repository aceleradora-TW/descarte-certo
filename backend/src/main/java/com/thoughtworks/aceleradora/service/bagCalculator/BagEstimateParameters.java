package com.thoughtworks.aceleradora.service.bagCalculator;

import com.thoughtworks.aceleradora.service.bucketcalculator.Materials;

public class BagEstimateParameters {
    private int bagAmount;
    private FloorAccess floorAccess;
    private Materials material;

    public BagEstimateParameters(int bagAmount, FloorAccess floorAccess, Materials material) {
        this.bagAmount = bagAmount;
        this.floorAccess = floorAccess;
        this.material = material;
    }

    public int getBagAmount() {
        return bagAmount;
    }

    public FloorAccess getFloorAccess() {
        return floorAccess;
    }

    public Materials getMaterial() {
        return material;
    }

    @Override
    public String toString() {
        return "BagEstimateParameters{" +
                "bagAmount=" + bagAmount +
                ", floorAccess=" + floorAccess +
                ", material=" + material +
                '}';
    }
}

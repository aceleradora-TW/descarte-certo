package com.thoughtworks.aceleradora.service.bucketcalculator;

public class BucketEstimateParameters {
    private int bucketAmount;
    private BucketZones zonesLocation;
    private Materials material;

    public BucketEstimateParameters(int bucketAmount, BucketZones zonesLocation, Materials material) {
        this.bucketAmount = bucketAmount;
        this.zonesLocation = zonesLocation;
        this.material = material;
    }

    public int getBucketAmount() {
        return bucketAmount;
    }
    public BucketZones getBucketZones() {
        return zonesLocation;
    }
    public Materials getMaterials() {
        return material;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "BucketEstimateParameters{" +
                "bucketAmount=" + bucketAmount +
                ", zonesLocation=" + zonesLocation +
                ", materials=" + material +
                '}';
    }
}
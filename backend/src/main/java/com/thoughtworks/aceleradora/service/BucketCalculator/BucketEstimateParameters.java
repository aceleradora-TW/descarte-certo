package com.thoughtworks.aceleradora.service.BucketCalculator;

public class BucketEstimateParameters {
    private int bucketAmount;
    private BucketZones zonesLocation;
    private Materials materials;

    public BucketEstimateParameters(int bucketAmount, BucketZones zonesLocation, Materials materials) {
        this.bucketAmount = bucketAmount;
        this.zonesLocation = zonesLocation;
        this.materials = materials;
    }

    public int getBucketAmount() {
        return bucketAmount;
    }
    public BucketZones getBucketZones() {
        return zonesLocation;
    }
    public Materials getMaterials() {
        return materials;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "BucketEstimateParameters{" +
                "bucketAmount=" + bucketAmount +
                ", zonesLocation=" + zonesLocation +
                ", materials=" + materials +
                '}';
    }
}
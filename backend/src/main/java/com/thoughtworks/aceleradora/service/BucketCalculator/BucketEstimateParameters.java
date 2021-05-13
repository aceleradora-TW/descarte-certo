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

    public void setBucketAmount(int bucketAmount) {
        this.bucketAmount = bucketAmount;
    }

    public BucketZones getBucketZones() {
        return zonesLocation;
    }

    public void setBucketZones(BucketZones zonesLocation) {
        this.zonesLocation = zonesLocation;
    }

    public Materials getMaterials() {
        return materials;
    }

    public void setMaterials(Materials materials) {
        this.materials = materials;
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
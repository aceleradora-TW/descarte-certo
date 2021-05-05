package com.thoughtworks.aceleradora.service.quickestimates;

class BagEstimateParameters {
    private int bagAmount;
    private FloorAccess floorAccess;
    private Material material;

    public BagEstimateParameters(int bagAmount, FloorAccess floorAccess, Material material) {
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

    public Material getMaterial() {
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

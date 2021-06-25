package com.thoughtworks.aceleradora.service.bucketcalculator;

import java.math.BigDecimal;

public class BucketEstimate{
    private Materials material;
    private BigDecimal estimate;

    public BucketEstimate(Materials material, BigDecimal estimate){
        this.material = material;
        this.estimate = estimate;
    }

	public Materials getMaterial() {
		return this.material;
	}

	public void setMaterial(Materials material) {
		this.material = material;
	}

	public BigDecimal getEstimate() {
		return this.estimate;
	}

	public void setEstimate(BigDecimal estimate) {
		this.estimate = estimate;
	}
}
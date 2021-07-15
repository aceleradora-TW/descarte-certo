package com.thoughtworks.aceleradora.service.bagCalculator;

import com.thoughtworks.aceleradora.service.bucketcalculator.Materials;
import java.math.BigDecimal;

public class BagEstimate {
    private Materials material;
    private BigDecimal estimate;

    public BagEstimate(Materials material, BigDecimal estimate){
        this.estimate = estimate;
        this.material = material;
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
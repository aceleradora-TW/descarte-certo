package com.thoughtworks.aceleradora.service.bagCalculator;

import java.math.BigDecimal;

import static com.thoughtworks.aceleradora.service.bagCalculator.FloorAccess.HARD_ACCESS;
import static com.thoughtworks.aceleradora.service.bucketcalculator.Materials.PLASTER;
import static com.thoughtworks.aceleradora.service.bucketcalculator.Materials.WOOD;

public class BagCalculator {

    public BigDecimal calculateEstimate(BagEstimateParameters parameters) {
        BigDecimal totalValue = new BigDecimal(0.0);
        double roundNumber = 0.0;
        double calculation = 0.0;
        int floorValue = 0;

        if (parameters.getFloorAccess() == HARD_ACCESS){
            floorValue = 40;
        }
        if (parameters.getMaterial() == PLASTER) {

            roundNumber = Math.ceil((parameters.getBagAmount() / 45.0));
            calculation = 200 * roundNumber + (floorValue * roundNumber);
        } else {
            roundNumber = Math.ceil((parameters.getBagAmount() / 30.0));
            calculation = 140 * roundNumber + (floorValue * roundNumber);
        }
        totalValue = new BigDecimal(calculation);

        return totalValue;
    }
}

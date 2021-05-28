package com.thoughtworks.aceleradora.service.quickestimates;

import java.math.BigDecimal;

import static com.thoughtworks.aceleradora.service.quickestimates.FloorAccess.ELEVATOR;
import static com.thoughtworks.aceleradora.service.quickestimates.FloorAccess.GROUND_FLOOR;
import static com.thoughtworks.aceleradora.service.bucketcalculator.Materials.PLASTER;
import static com.thoughtworks.aceleradora.service.bucketcalculator.Materials.WOOD;

public class QuickEstimateCalculator {

    public BigDecimal calculateEstimate(BagEstimateParameters parameters) {
        BigDecimal totalValue = new BigDecimal(0.0);
        double roundNumber = 0.0;
        double calculation = 0.0;
        int floorValue = 0;

        if (parameters.getFloorAccess() != GROUND_FLOOR && parameters.getFloorAccess() != ELEVATOR){
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

    public static void main(String[] args) {

        QuickEstimateCalculator calculator = new QuickEstimateCalculator();

        BagEstimateParameters params = new BagEstimateParameters(55, ELEVATOR, WOOD);

        BigDecimal result = calculator.calculateEstimate(params);

        System.out.println("Total: " +result);
    }
}

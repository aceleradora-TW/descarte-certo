package com.thoughtworks.aceleradora.service.quickestimates;

import java.math.BigDecimal;

import static com.thoughtworks.aceleradora.service.quickestimates.FloorAccess.ELEVATOR;
import static com.thoughtworks.aceleradora.service.quickestimates.FloorAccess.GROUND_FLOOR;
import static com.thoughtworks.aceleradora.service.quickestimates.Material.PLASTER;

public class QuickEstimateCalculator {

    public BigDecimal calculateEstimate(BagEstimateParameters parameters) {

        if (parameters.getMaterial() == PLASTER) {

            if (parameters.getFloorAccess() == GROUND_FLOOR || parameters.getFloorAccess() == ELEVATOR) {
                return new BigDecimal("200.00");
            }

        }


        // ???
        return BigDecimal.ZERO;
    }

    public static void main(String[] args) {
        // 5 sacos de madeira (elevador ou terreo) = R$140

        QuickEstimateCalculator calculator = new QuickEstimateCalculator();

        BagEstimateParameters params = new BagEstimateParameters(5, ELEVATOR, Material.WOOD);

        BigDecimal result = calculator.calculateEstimate(params);

        System.out.println(result);
    }
}

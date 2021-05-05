package com.thoughtworks.aceleradora.service;

import java.math.BigDecimal;

public class QuickEstimateCalculator {

    public BigDecimal calculateEstimate() {
        return BigDecimal.ZERO;
    }

    public static void main(String[] args) {
        QuickEstimateCalculator calculator = new QuickEstimateCalculator();

        BigDecimal result = calculator.calculateEstimate();

        System.out.println(result);
    }
}

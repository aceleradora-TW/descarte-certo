package com.thoughtworks.aceleradora.controller;

import com.thoughtworks.aceleradora.service.quickestimates.BagEstimateParameters;
import com.thoughtworks.aceleradora.service.quickestimates.FloorAccess;
import com.thoughtworks.aceleradora.service.quickestimates.Material;
import com.thoughtworks.aceleradora.service.quickestimates.QuickEstimateCalculator;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;

@RestController
@RequestMapping(path = "/estimates") //Acessa a classe
public class QuickEstimatesController {
    @GetMapping(path = "/bags/{quantidadeSacos}/{acesso}/{materiais}")// Passa a rota com parametros
    public BigDecimal returnEstimateBag(@PathVariable("quantidadeSacos") int quantidadeSacos, @PathVariable("acesso") FloorAccess acesso,@PathVariable("materiais") Material materiais){
        QuickEstimateCalculator calculator = new QuickEstimateCalculator();

        BagEstimateParameters params = new BagEstimateParameters(quantidadeSacos, acesso, materiais);

        BigDecimal result = calculator.calculateEstimate(params);

        return result;

    }
}

package com.thoughtworks.aceleradora.controller;

import com.thoughtworks.aceleradora.service.BucketCalculator.BucketCalculator;
import com.thoughtworks.aceleradora.service.BucketCalculator.BucketEstimateParameters;
import com.thoughtworks.aceleradora.service.BucketCalculator.BucketZones;
import com.thoughtworks.aceleradora.service.BucketCalculator.Materials;
import com.thoughtworks.aceleradora.service.quickestimates.BagEstimateParameters;
import com.thoughtworks.aceleradora.service.quickestimates.FloorAccess;
import com.thoughtworks.aceleradora.service.quickestimates.Material;
import com.thoughtworks.aceleradora.service.quickestimates.QuickEstimateCalculator;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;

import static com.thoughtworks.aceleradora.service.BucketCalculator.BucketZones.OUTHERZONES;
import static com.thoughtworks.aceleradora.service.BucketCalculator.Materials.PLASTER;

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

    @GetMapping(path = "/bucket/{quantidadeCacambas}/{zonas}/{materiais}")
    public BigDecimal returnEstimateBucket(@PathVariable("quantidadeCacambas") int quantidadeCacambas, @PathVariable("zonas")BucketZones zonas, @PathVariable("materiais") Materials materiais){
        BucketCalculator calculator = new BucketCalculator();

        BucketEstimateParameters params = new BucketEstimateParameters(quantidadeCacambas, zonas, materiais);

        BigDecimal result = calculator.calculateBucketEstimate(params);

        return result;
    }

}

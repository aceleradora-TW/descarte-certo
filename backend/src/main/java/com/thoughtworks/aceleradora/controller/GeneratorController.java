package com.thoughtworks.aceleradora.controller;

import com.thoughtworks.aceleradora.domain.GeneratorService;
import com.thoughtworks.aceleradora.entity.GeneratorEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.ExceptionHandler;


@RestController
@RequestMapping("/generator")
public class GeneratorController {

    @Autowired
    GeneratorService generatorService;

    @PostMapping
    public ResponseEntity save(@RequestBody GeneratorRequest generatorRequest){
        try {
            GeneratorEntity saved = generatorService.saveGenerator(generatorRequest);
            return new ResponseEntity(saved, HttpStatus.CREATED);
        } catch (Exception error) {
            return ResponseEntity.badRequest().body("Ocorreu um erro!");
        }

    }
}

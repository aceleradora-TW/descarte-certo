package com.thoughtworks.aceleradora.domain;

import com.thoughtworks.aceleradora.controller.GeneratorRequest;
import com.thoughtworks.aceleradora.entity.Address;
import com.thoughtworks.aceleradora.entity.GeneratorEntity;
import com.thoughtworks.aceleradora.repository.GeneratorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class GeneratorService{

    @Autowired
    GeneratorRepository repository;

    public GeneratorEntity saveGenerator(GeneratorRequest generatorRequest){
        GeneratorEntity generatorEntity = GeneratorEntity.builder()
        .name(generatorRequest.getName()).build();
        return repository.save(generatorEntity);
    }
}

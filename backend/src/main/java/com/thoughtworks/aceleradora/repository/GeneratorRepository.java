package com.thoughtworks.aceleradora.repository;

import com.thoughtworks.aceleradora.entity.GeneratorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Collection;
import java.util.List;

@org.springframework.stereotype.Repository
public interface GeneratorRepository extends JpaRepository<GeneratorEntity, Integer>{

}





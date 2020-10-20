package com.thoughtworks.aceleradora.repository;

import com.thoughtworks.aceleradora.entity.Estimate;
import org.springframework.data.jpa.repository.JpaRepository;

@org.springframework.stereotype.Repository
public interface EstimateRepository extends JpaRepository<Estimate, Integer>{

}





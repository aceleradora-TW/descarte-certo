package com.thoughtworks.aceleradora.service;

import com.thoughtworks.aceleradora.controller.request.EstimateRequest;
import com.thoughtworks.aceleradora.controller.request.RequesterRequest;
import com.thoughtworks.aceleradora.entity.Estimate;
import junit.framework.TestCase;
import org.junit.Test;

public class EstimateConverterServiceTest extends TestCase {

    @Test
    public void shouldCreateEstimateWithRequestName() {
        EstimateRequest estimateRequest = new EstimateRequest();
        EstimateConverterService estimateConverterService = new EstimateConverterService();

        Estimate estimate = estimateConverterService.converter(estimateRequest);

    }
}
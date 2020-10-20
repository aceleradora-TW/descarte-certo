package com.thoughtworks.aceleradora.controller.response;

import com.thoughtworks.aceleradora.entity.Estimate;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class EstimateResponse {
    private int estimateCode;

    public static EstimateResponse from(Estimate estimate) {
        return EstimateResponse
                .builder()
                    .estimateCode(estimate.getId())
                .build();
    }
}

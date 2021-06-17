package com.thoughtworks.aceleradora.controller.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {

    @NotNull
    private String msg;
    private boolean authenticated;

}

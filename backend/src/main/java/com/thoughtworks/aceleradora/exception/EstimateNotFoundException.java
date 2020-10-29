package com.thoughtworks.aceleradora.exception;

public class EstimateNotFoundException extends RuntimeException {
    private int id;

    public EstimateNotFoundException(int id) {
        this.id = id;
    }

    @Override
    public String getMessage() {
        return String.format("Estimate with id %d was not found", id);
    }
}

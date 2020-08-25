package com.thoughtworks.aceleradora.domain;

import java.util.Base64;

import static java.nio.charset.StandardCharsets.UTF_8;

public final class Encoding {

    private static final Base64.Encoder ENCODER = Base64.getEncoder();

    private final String original;
    private final String encoded;

    private Encoding(String original, String encoded) {
        this.original = original;
        this.encoded = encoded;
    }

    public static Encoding of(String value) {
        return new Encoding(
                value,
                ENCODER.encodeToString(value.getBytes(UTF_8))
        );
    }

    public String getOriginal() {
        return original;
    }

    public String getEncoded() {
        return encoded;
    }

    @Override
    public String toString() {
        return "Encoding{" +
                "original='" + original + '\'' +
                ", encoded='" + encoded + '\'' +
                '}';
    }
}

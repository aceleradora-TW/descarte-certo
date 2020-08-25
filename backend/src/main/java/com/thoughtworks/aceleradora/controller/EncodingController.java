package com.thoughtworks.aceleradora.controller;

import com.thoughtworks.aceleradora.domain.Encoding;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/encode")
public class EncodingController {

    private static final Logger logger = LoggerFactory.getLogger(EncodingController.class);

    @GetMapping
    public Encoding encode(@RequestParam String value) {
        Encoding encoding = Encoding.of(value);
        logger.info("action='EncodingResult' original='{}' encoded='{}'", encoding.getOriginal(), encoding.getEncoded());
        return encoding;
    }

}

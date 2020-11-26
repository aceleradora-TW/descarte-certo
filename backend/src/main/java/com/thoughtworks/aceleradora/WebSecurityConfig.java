package com.thoughtworks.aceleradora;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@Configuration
public class  WebSecurityConfig extends WebSecurityConfigurerAdapter
 {
    @Override 
    protected void configure (HttpSecurity httpSecurity) throws Exception {
        httpSecurity.cors().and().csrf().disable();     
    }

}

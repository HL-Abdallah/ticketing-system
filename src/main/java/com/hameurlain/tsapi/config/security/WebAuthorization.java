package com.hameurlain.tsapi.config.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

/**
 * 
 * @author Abdallah hameurlain.abdallah@gmail.com
 * @since Oct 25, 2022
 * @version 1.0
 */
@Configuration
public class WebAuthorization {
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.cors().and()
		.csrf().disable().
		authorizeRequests()
			.antMatchers("/auth/login", "/auth/register").permitAll()
			.anyRequest().authenticated();
		
		return http.build();
	}
}
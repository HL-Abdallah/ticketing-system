package com.hameurlain.tsapi.config.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author Abdallah hameurlain.abdallah@gmail.com
 * @since Oct 25, 2022
 * @version 1.0
 */
@Configuration
public class CORSConfig {

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedMethods("GET", "PUT", "POST", "DELETE").allowedOrigins("*");
			}
		};
	}
}

package com.hameurlain.tsapi.auth.controllers.dao;

import javax.validation.constraints.*;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class RegisterRequest {
	
	@Size(min = 6 ,max = 20)
	private String username;
	@NotBlank
	@Email
	private String email;
	@Size(min = 8,max= 255)
	private String password;
	@NotBlank
	private String role;
	
}
package com.hameurlain.tsapi.auth.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.hameurlain.tsapi.auth.controllers.dao.LoginRequest;
import com.hameurlain.tsapi.auth.controllers.dao.RegisterRequest;
import com.hameurlain.tsapi.auth.role.ERole;
import com.hameurlain.tsapi.auth.role.Role;
import com.hameurlain.tsapi.auth.role.RoleRepo;
import com.hameurlain.tsapi.auth.user.User;
import com.hameurlain.tsapi.auth.user.UserRepo;

/**
 * @author Abdallah hameurlain.abdallah@gmail.com
 * @since Oct 27, 2022
 * @version 1.0
 */
@RestController
@RequestMapping(value = "/auth", produces = "application/json")
public class AuthController {

	@Autowired
	UserRepo userRepo;
	@Autowired
	RoleRepo roleRepo;
	@Autowired
	PasswordEncoder encoder;
	@Autowired
	AuthenticationManager authenticationManager;
	@Autowired
	SessionRegistry sessionRegistry;
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@Valid @RequestBody LoginRequest request) {
			Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
			SecurityContextHolder.getContext().setAuthentication(authentication);
			var currentUser = authentication.getPrincipal();
			return  ResponseEntity.ok(currentUser);
	}

	@PostMapping("/register")
	public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest request) {
		userRepo.findByUsername(request.getUsername()).ifPresent(user -> {
			throw new ResponseStatusException(HttpStatus.CONFLICT,"a user with username "+user.getUsername()+" already exists");
		});
		userRepo.findByEmail(request.getEmail()).ifPresent(user -> {
			throw new ResponseStatusException(HttpStatus.CONFLICT,"a user with email "+user.getEmail()+" already exists");
		});
		Role role = roleRepo
				.findByName(ERole.valueOf("ROLE_"+request.getRole().toUpperCase()))
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.CONFLICT,"Role with name "+request.getRole()+" does not exist"));
		User newUser = new User(request.getUsername(),request.getEmail(),encoder.encode(request.getPassword()));
		newUser.getRoles().add(role);
		userRepo.save(newUser);
		return new ResponseEntity<>(newUser,HttpStatus.CREATED);
	}
	
	@PostMapping("/getAllPrincipals")
	public ResponseEntity<?> getAllPrincipals(){
		return ResponseEntity.ok(sessionRegistry.getAllPrincipals());
	}

}

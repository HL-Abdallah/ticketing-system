package com.hameurlain.tsapi;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.hameurlain.tsapi.auth.role.ERole;
import com.hameurlain.tsapi.auth.role.Role;
import com.hameurlain.tsapi.auth.role.RoleRepo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@SpringBootApplication
public class Main implements CommandLineRunner{

	@Autowired
	RoleRepo roleRepo;
	
	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		log.info("Initializing database with Roles : ");
		Set<String> roles = new HashSet<>();
		roles.addAll(List.of("ROLE_ADMIN","ROLE_USER","ROLE_TECH_SUPPORT"));
		roles.forEach(r -> {
			roleRepo.findByName(ERole.valueOf(r))
			.ifPresentOrElse(
					role -> log.trace("role {} already exists",role.getName()),
					() -> roleRepo.save(new Role(ERole.valueOf(r)))
					);
		});
	}
	
}

package com.hameurlain.tsapi.auth.role;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Abdallah hameurlain.abdallah@gmail.com
 * @since Oct 27, 2022
 * @version 1.0
 */
public interface RoleRepo extends JpaRepository<Role, Long> {
	 Optional<Role> findByName(ERole name);
}

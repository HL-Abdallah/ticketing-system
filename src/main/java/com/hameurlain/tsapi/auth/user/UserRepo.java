package com.hameurlain.tsapi.auth.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Abdallah hameurlain.abdallah@gmail.com
 * @since Oct 27, 2022
 * @version 1.0
 */
public interface UserRepo extends JpaRepository<User, Long> {
	 Optional<User> findByUsername(String username);
	 Optional<User> findByEmail(String email);
}

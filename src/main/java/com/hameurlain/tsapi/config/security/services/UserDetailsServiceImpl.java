package com.hameurlain.tsapi.config.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hameurlain.tsapi.auth.user.User;
import com.hameurlain.tsapi.auth.user.UserRepo;

/**
 * @author Abdallah hameurlain.abdallah@gmail.com
 * @since Oct 27, 2022
 * @version 1.0
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	UserRepo repo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = repo.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("no results found for username = "+ username));
		return UserDetailsImpl.build(user);
	}
}

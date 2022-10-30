package com.hameurlain.tsapi.auth.user;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.hameurlain.tsapi.auth.role.Role;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

/**
 * @author Abdallah hameurlain.abdallah@gmail.com
 * @since Oct 27, 2022
 * @version 1.0
 */
@Entity(name = "users")
@Data
@RequiredArgsConstructor
@NoArgsConstructor
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NonNull
	private  String username;
	@NonNull
	private  String email;
	@NonNull
	private  String password;
	
	@JsonIgnore
	public String getPassword() {
	    return password;
	}

	@JsonProperty
	public void setPassword(String password) {
	    this.password = password;
	}

	@ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "users_to_roles",
            joinColumns = @JoinColumn(name="user_id"),
            inverseJoinColumns = @JoinColumn(name="role_id"))
	private Set<Role> roles = new HashSet<>();
	
}

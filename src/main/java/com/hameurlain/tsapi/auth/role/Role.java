package com.hameurlain.tsapi.auth.role;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NonNull;

/**
 * @author Abdallah hameurlain.abdallah@gmail.com
 * @since Oct 27, 2022
 * @version 1.0
 */
	@Entity
	@Table(name = "roles")
	@Data
	public class Role {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @Enumerated(EnumType.STRING)
	    @Column
	    private ERole name;
	    
	    public Role() {};
	    public Role(@NonNull ERole role) {
	    	this.name = role;
	    };

	}
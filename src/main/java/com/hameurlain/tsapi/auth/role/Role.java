package com.hameurlain.tsapi.auth.role;

import javax.persistence.*;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

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
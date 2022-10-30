package com.hameurlain.tsapi.globalAdvice.helperClasses;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class ValidationErrorResponse {

	private List<Violation> validation_errors = new ArrayList<>();

}
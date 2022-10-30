package com.hameurlain.tsapi.globalAdvice.ErrorResponsePOJO;

import lombok.Data;

@Data
public class Violation {

	private final String fieldName;

	private final String message;

}

package com.hameurlain.tsapi.globalAdvice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.hameurlain.tsapi.globalAdvice.ErrorResponsePOJO.ErrorResponse;
import com.hameurlain.tsapi.globalAdvice.ErrorResponsePOJO.ValidationErrorResponse;
import com.hameurlain.tsapi.globalAdvice.ErrorResponsePOJO.Violation;

/**
 * @author Abdallah hameurlain.abdallah@gmail.com
 * @since Oct 29, 2022
 * @version 1.0
 */
@RestControllerAdvice
public class ErrorHandlerControllerAdvice {

	/**
	 * Handles whatever javax.validation.constraints annotation that fails, from all
	 * controllers.
	 * <p>
	 * returns it nicely formatted using helper classes defined in
	 * globalAdvice.helperClasses package.
	 * 
	 * @param MethodArgumentNotValidException ex
	 * @return ResponseEntity with body of ValidationErrorResponse obj,
	 *         HttpStatus.BAD_REQUEST and MediaType.APPLICATION_JSON
	 */
	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	ResponseEntity<ValidationErrorResponse> onMethodArgumentNotValidException(MethodArgumentNotValidException e) {
		ValidationErrorResponse error = new ValidationErrorResponse();
		for (FieldError fieldError : e.getBindingResult().getFieldErrors()) {
			error.getValidation_errors().add(new Violation(fieldError.getField(), fieldError.getDefaultMessage()));
		}
		return new ResponseEntity<ValidationErrorResponse>(error, HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(BadCredentialsException.class)
	@ResponseStatus(HttpStatus.UNAUTHORIZED)
	ResponseEntity<ErrorResponse> onBadCredentials(Exception e) {
		var error = new ErrorResponse(HttpStatus.UNAUTHORIZED,e);
		return new ResponseEntity<>(error, HttpStatus.UNAUTHORIZED);
	}

}
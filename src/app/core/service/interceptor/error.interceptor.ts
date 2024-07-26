import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      let customErrorMessage = 'An unknown error occurred!';
      
      if (error.status === 0) {
        customErrorMessage = 'The server is currently unavailable. Please try again later.';
      } else {
        customErrorMessage = `Error ${error.status}: ${error.message}`;
      }

      // Optionally log error to an external service or console
      console.error('Error occurred:', error);

      // Return a user-friendly error message
      return throwError(() => new Error(customErrorMessage));
    })
  );
};

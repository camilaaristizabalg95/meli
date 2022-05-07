import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { ErrorHandler } from '../../utils/functions.utils'
import { CustomError } from '../../core/models/customError.model'

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  errorHandler = new ErrorHandler(this.router);
  
  constructor(
    private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        this.errorHandler.getAction(error as CustomError)();
        return throwError(error)
      })
    )
  }
}

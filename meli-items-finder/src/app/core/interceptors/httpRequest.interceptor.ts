import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

import { ErrorHandler } from '../../utils/functions.utils'
import { CustomError } from '../../core/models/customError.model'
import { PreloaderService } from '../services/preloader/preloader.service';

@Injectable()

/**
 * Servicio encagado de interceptar 
 * todas las peticiones http del aplicativo 
 * y ejecutar acciones sobre ellas de ser
 * necesario (agregar headers, manejo de preoloader,
 * manejo de errores)
 */
export class HttpRequestInterceptor implements HttpInterceptor {

  /**
   * Crea instancia de ErrorHandler
   * para el manejo de erroes
   */
  errorHandler = new ErrorHandler(this.router);
  
  constructor(
    private router: Router,
    private preloaderService: PreloaderService
  ) {}

  /**
   * Función que se ejecuta cuando se intercepta
   * una peticioón http.
   * Establece el valor del preloader a true y una vez
   * se completa la petición http lo establece a false.
   * Si la petición http resulta en erro se hace el manejo
   * de errores llamando a errorHandler para ejecutar la
   * acción pertinente de acuerdo al status code.
   * @param request petición http
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.preloaderService.setLoading();

    return next.handle(request).pipe(
      finalize(() => this.preloaderService.clearLoading()),
      catchError(error => {
        this.errorHandler.getAction(error as CustomError)();
        return throwError(error)
      })
    )
  }
}

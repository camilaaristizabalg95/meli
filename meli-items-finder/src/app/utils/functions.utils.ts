import { Router } from '@angular/router';
import { CustomError } from '../core/models/customError.model';

/**
 * @constructor Utiliza la inyección de dependencias
 * para crear la instancia de router que va apermitir
 * navegar a otras rutas de la app.
 */
export class ErrorHandler{
    constructor(
        private router: Router
    ){ }

    /**
     * Dado un error retornado por una petición Http 
     * retorna una acción para ser ejecutada dependiendo
     * del status code
     * @param error Error retornado por una peticion Http
     */
    getAction(error: CustomError): any{
        const actions = {
            404: () => this.router.navigate(['not-found']),
            500: () => console.error(error.message)
        }
        return actions[error.status]    
    }
}
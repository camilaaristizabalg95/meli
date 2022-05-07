import { Router } from '@angular/router';
import { CustomError } from '../core/models/customError.model';

export class ErrorHandler{
    constructor(
        private router: Router
    ){ }

    getAction(error: CustomError): any{
        const actions = {
            404: () => this.router.navigate(['not-found']),
            500: () => console.error(error.message)
        }
        return actions[error.status]    
    }
}
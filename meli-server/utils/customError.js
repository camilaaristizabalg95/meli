/**
 * Clase que extiende Error
 * para agregar el status code
 * de la peticioón Http
 */

class CustomError extends Error{
    constructor(message,status){
        super(message);
        this.status = status;
    }
}

module.exports = CustomError;
export interface CustomError{
    /**
     * Código de estado de la petición Http
     */
    status: number;
    /**
     * Mensaje de la peticioón Http
     */
    message: string;
}
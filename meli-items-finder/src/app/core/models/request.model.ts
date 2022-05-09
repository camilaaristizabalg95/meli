export interface RequestModel{
    /**
     * Parametros (complemento de ruta) 
     * de la peticioón
     */
    params: string;
    /**
     * body de la petición
     */
    payload?: any;
}
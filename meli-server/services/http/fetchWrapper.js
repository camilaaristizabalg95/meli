const https = require('https')  

/**
 * Clase para el manejo de las peticiones http
 */
class FetchWrapper{

    /**
     * 
     * @param url base url de la api
     */
    constructor(url){
        this.baseUrl = url;
    }

    /**
     * Realiza la petición get y retorna una promesa con el resultado
     * @param endpoint complemento de ruta para la peticioón
     */
    get(endpoint){
        let data = '';
        return new Promise((resolve)=>{
            https.get(`${this.baseUrl}/${endpoint}`,(res => {
                res.on('data', chunk => data += chunk)
                res.on('end', ()=> (resolve(JSON.parse(data))))
            }))
        })
    }
}

module.exports = FetchWrapper
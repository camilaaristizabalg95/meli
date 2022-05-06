const https = require('https') 

class FetchWrapper{
    constructor(url){
        this.baseUrl = url;
    }

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
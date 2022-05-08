const https = require('https') 
const http = require('http') 

class FetchWrapper{
    constructor(url, https =true){
        this.baseUrl = url;
        this.isHttps = https;
    }

    get(endpoint){
        let data = '';
        return new Promise((resolve)=>{
            if(this.isHttps){
                https.get(`${this.baseUrl}/${endpoint}`,(res => {
                    res.on('data', chunk => data += chunk)
                    res.on('end', ()=> (resolve(JSON.parse(data))))
                }))
            }else{
                http.get(`${this.baseUrl}/${endpoint}`,(res => {
                    res.on('data', chunk => data += chunk)
                    res.on('end', ()=> (resolve(JSON.parse(data))))
                }))
            }
        })
    }
}

module.exports = FetchWrapper
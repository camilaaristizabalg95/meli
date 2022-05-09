import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RequestModel } from '../../models/request.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * Servicio encargado de enviar todas las
 * peticiones Http del aplicativo
 */
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Realiza la petición GET 
   * @param data params y payload para enviar en la petición
   * @returns Observable de los datos retornados por la petición
   */
  getRequest(data: RequestModel): Observable<Object>{
    return this.http.get(`http://localhost:3000/${data.params}`)
  }

  /**
   * Realiza la petición POST 
   * @param data params y payload para enviar en la petición
   * @returns Observable de los datos retornados por la petición
   */
  postRequest(data: RequestModel): Observable<Object>{
    return this.http.get(`http://localhost:3000/${data.params}`, data.payload)
  }

  /**
   * Realiza la petición PUT 
   * @param data params y payload para enviar en la petición
   * @returns Observable de los datos retornados por la petición
   */
  putRequest(data: RequestModel): Observable<Object>{
    return this.http.put(`http://localhost:3000/${data.params}`, data.payload)
  }

  /**
   * Realiza la petición DELETE
   * @param data params y payload para enviar en la petición
   * @returns Observable de los datos retornados por la petición
   */
  deleteRequest(data: RequestModel): Observable<Object>{
    return this.http.delete(`http://localhost:3000/${data.params}`)
  }

}

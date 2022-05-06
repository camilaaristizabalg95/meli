import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RequestModel } from '../models/request.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getRequest(data: RequestModel): Observable<Object>{
    return this.http.get(`http://localhost:3000/${data.params}`)
  }

  postRequest(data: RequestModel): Observable<Object>{
    return this.http.get(`http://localhost:3000/${data.params}`, data.payload)
  }

  putRequest(data: RequestModel): Observable<Object>{
    return this.http.put(`http://localhost:3000/${data.params}`, data.payload)
  }

  deleteRequest(data: RequestModel): Observable<Object>{
    return this.http.delete(`http://localhost:3000/${data.params}`)
  }

}

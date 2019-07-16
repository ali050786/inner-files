import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  serverBase = environment.path;
  serverPath = this.serverBase + '/api';

  constructor(private http: HttpClient ) {

  }
  
  
  public getDataById(model, modelId) {
    return this.http.get(`${this.serverPath}/${model}/${modelId}`)
  }


  public postData(model, data) {
    return this.http.post(`${this.serverPath}/${model}`, data)
  }

  public putData(model, modelId, data) {
    return this.http.put(`${this.serverPath}/${model}/${modelId}`, data)
  }

  public deleteData(model, modelId) {
    return this.http.delete(`${this.serverPath}/${model}/${modelId}`)
  }


  

}

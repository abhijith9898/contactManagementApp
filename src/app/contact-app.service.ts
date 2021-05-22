import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactAppService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8081';

  public registerService(userData){
    return this.http.post( this.API + '/registration', userData);
  }
}

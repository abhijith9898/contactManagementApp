import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService
 {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8080';

  public registerService(userData){
    return this.http.post( this.API + '/registered', userData);
  }

  public loginService(userData){
    return this.http.post( this.API + '/login', userData);
  }
}

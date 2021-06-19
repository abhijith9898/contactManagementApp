import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInfo } from './login-info';
import { AuthResponse } from './auth-response';
import { RegisterInfo } from './register-info';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private currentUserSubject = new BehaviorSubject<any>(null);
  // public currentUserId = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8080';
  //api = 'http://localhost:8080/api/auth/signup';
  //http://localhost:8080/api/auth/signin

  // public registerService(userData: RegisterInfo){
  //   return this.http.post( this.API + '/registered', userData);
  // }
  public registerService(userData: RegisterInfo): Observable<string> {
    return this.http.post<string>(this.API + '/api/auth/signup', userData);
  }

  public loginService(credentials: LoginInfo): Observable<AuthResponse> {
    //console.log("login details", credentials);
    return this.http.post<AuthResponse>(this.API + '/api/auth/signin', credentials);
  }

  // setData(data) {
  //   this.currentUserSubject.next(data)
  // }
}

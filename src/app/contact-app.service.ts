import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactAppService {

  constructor(private http: HttpClient) { }

  API = 'https://dummyapi.io/data/api';

  public registerUser(userData){
    return this.http.post( this.API + '/post', userData);
  }
}

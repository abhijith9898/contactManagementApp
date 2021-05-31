import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact-model';
import { AuthResponse } from './auth/auth-response';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  authResponse: AuthResponse;
  API = "http://localhost:8080";


  constructor(private http: HttpClient) { }

  public getContact() {
    //console.log("auth response id", this.authResponse.id);
    return this.http.get<Contact[]>(this.API + '/api/' + this.authResponse.id + '/address');
  }

  public createContact(contact: Contact) {
    return this.http.post<Contact>(this.API + '/api/' + this.authResponse.id + '/address', contact);
  }

  public updateContact(contact: Contact) {
    console.log("Update on service", contact);
    return this.http.put<Contact>(this.API + '/api/' + this.authResponse.id + '/address/' + contact.id, contact);
  }

  public deleteContact(id: number) {
    return this.http.delete(this.API + '/api/' + this.authResponse.id + '/address/' + id);
  }
}

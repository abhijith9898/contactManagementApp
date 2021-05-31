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

  /*--------------------------------USER SERVICES----------------------------------------------------*/

  public getContact(currentUserId) {
    //console.log("get contact of user id", currentUserId);
    return this.http.get<Contact[]>(this.API + '/api/' + currentUserId + '/address');
  }

  public createContact(contact: Contact, currentUserId) {
    return this.http.post<Contact>(this.API + '/api/' + currentUserId + '/address', contact);
  }

  public updateContact(contact: Contact, currentUserId) {
    console.log("Update on service id", contact.id);
    return this.http.put<Contact>(this.API + '/api/' + currentUserId + '/address/' + contact.id, contact);
  }

  public deleteContact(contactId: number, currentUserId) {
    return this.http.delete(this.API + '/api/' + currentUserId + '/address/' + contactId);
  }

/*--------------------------------ADMIN SERVICES----------------------------------------------------*/

public getAdminContact() {
  return this.http.get<Contact[]>(this.API + '/api/address');
}

public createAdminContact(contact: Contact, currentUserId) {
  return this.http.post<Contact>(this.API + '/api/' + currentUserId + '/address', contact);
}

public updateAdminContact(contact: Contact) {
  console.log("Update on admin id", contact.id);
  return this.http.put<Contact>(this.API + '/api/address/' + contact.id, contact);
}

public deleteAdminContact(contactId: number) {
  return this.http.delete(this.API + '/api/address/' + contactId);
}



}

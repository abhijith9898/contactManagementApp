import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact-model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  API = "http://localhost:8080";

  constructor( private http: HttpClient) { }
  
  public readContacts(){
    return this.http.get<Contact[]>(this.API + '/userForm');
  }

  public createContact(contact: Contact){
    return this.http.post<Contact>(this.API + '/userForm', contact);
  }

  public updateContact(contact: Contact){
    return this.http.put<Contact>(this.API + '/userForm/'+ contact.UserFormId, contact);
  }

  public deleteContact(UserFormId: number){
    return this.http.delete(this.API + '/userForm/'+ UserFormId);
  }
}

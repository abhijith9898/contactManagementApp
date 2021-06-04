import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact-model';
import { SessionStorageService } from '../auth/session-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user-contacts',
  templateUrl: './user-contacts.component.html',
  styleUrls: ['./user-contacts.component.css']
})
export class UserContactsComponent implements OnInit {


  dataSource: Contact[];
  currentUserId: any;
  contact: Contact;

  constructor(private contactsService: ContactsService, private router: Router, private sessionStorage: SessionStorageService, private authService: AuthService) { }

  ngOnInit(): void {

    if (this.sessionStorage.getToken()) {
      let contactOfUserId = this.sessionStorage.getId();
      this.currentUserId = contactOfUserId;
      // console.log("this is the user id in contacts", ContactOfUserId); 
      this.contactsService.getContact(contactOfUserId).subscribe((result) => {
        console.log(result);
        this.dataSource = result;
      })
    }

  }



  addNewContact(contactForm) {

    console.log("form value and user id", contactForm.value, this.currentUserId);

    this.contactsService.createContact(contactForm.value, this.currentUserId).subscribe((result) => {
      console.log("createnewcontact", result);
      window.location.reload();
    });
  }

  onClickEdit(contact: Contact) {
    this.contact = contact;
    console.log("selected: ", this.contact);
  }



  onClickDelete(contactId) {
    console.log("delete id and user id", contactId, this.currentUserId);
    this.contactsService.deleteContact(contactId, this.currentUserId).subscribe((result) => {
      console.log("delet succesful", result);
      window.location.reload();
    },
      (error) => {
        //window.location.reload();
        console.log("delet failed", error);
      });
  }

  onClickSave(contact) {
    console.log("Update contact and contact id and user id", contact, contact.id, this.currentUserId);
    contact.id = this.contact['id'];
    this.contactsService.updateContact(contact, this.currentUserId).subscribe((result) => {
      console.log("result is", result);
    });
  }

  onClickCancel(contact, index) { }

}

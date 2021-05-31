import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact-model';
import { SessionStorageService } from '../auth/session-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {



  dataSource: Contact[];
  adminId : any;
  contact: Contact;

  constructor(private contactsService: ContactsService, private router: Router, private sessionStorage: SessionStorageService, private authService: AuthService) { }

  ngOnInit(): void {

    if (this.sessionStorage.getToken()) {
      let contactOfAdminId = this.sessionStorage.getId();
      this.adminId = contactOfAdminId;
      // console.log("this is the admin id in contacts", contactOfAdminId); 
      this.contactsService.getAdminContact().subscribe((result) => {
        console.log(result);
        this.dataSource = result;
      })
    }

  }

  addNewContact(contactForm) {

    console.log("form value and user id", contactForm.value, this.adminId);

    this.contactsService.createAdminContact(contactForm.value, this.adminId).subscribe((result) => {
      console.log("createnewcontact", result);
      window.location.reload();
    });
  }

  onClickEdit(contact: Contact) {
    this.contact = contact;
    console.log("selected: ", this.contact);
  }



  onClickDelete(contactId) {
    console.log("delete id and admin id", contactId, this.adminId);
    this.contactsService.deleteAdminContact(contactId).subscribe((result) => {
      console.log("onclickdelete", result);
      window.location.reload();
    });
  }

  onClickSave(contact) {
    console.log("Update contact and contact id and admin id", contact, contact.id, this.adminId);
    contact.id = this.contact['id'];
    this.contactsService.updateAdminContact(contact).subscribe((result) => {
      console.log("result is", result);
    });
  }

  onClickCancel(contact, index) { }

}

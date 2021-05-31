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

 // displayedColumns  :  string[] = ['id', 'name', 'title', 'email', 'phone', 'address', 'city', 'actions'];
  dataSource: Contact[];
  
  contact:Contact;

  constructor(private contactsService: ContactsService, private router: Router, private sessionStorage: SessionStorageService, private authService: AuthService) { }

  ngOnInit(): void {

    
    this.contactsService.getContact().subscribe((result)=>{   
      console.log(result); 
      this.dataSource  =  result;
    })
  }

  onClickEdit(contact:Contact){
    this.contact = contact;
    console.log("selected: ", this.contact);
  }

  // newContact(){
  //   this.contact = {};
  // }

  addNewContact(contactForm){

    console.log("form value: ", contactForm.value);

    this.contactsService.createContact(contactForm.value).subscribe((result)=>{
      console.log("createnewcontact",result);
      window.location.reload();
    });
    
  }

  onClickDelete(id){
    console.log("delete id", id);
    this.contactsService.deleteContact(id).subscribe((result)=>{
      console.log("onclickdelete",result);
      window.location.reload();
    });
  }

  onClickSave(contact){
    console.log("Update", contact);
    contact.id = this.contact['id'];
    this.contactsService.updateContact(contact).subscribe((result)=>{
      console.log("result is",result);
    });
  }

  onClickCancel(contact, index){}

}

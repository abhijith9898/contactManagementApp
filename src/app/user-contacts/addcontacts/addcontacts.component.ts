import { Component, OnInit } from '@angular/core';
//import { ContactsService } from '.';

@Component({
  selector: 'app-addcontacts',
  templateUrl: './addcontacts.component.html',
  styleUrls: ['./addcontacts.component.css']
})
export class AddcontactsComponent implements OnInit {

  //constructor(private ContactsService: ContactsService) { }

  ngOnInit(): void {
  }

  createContact(contactForm){

    //console.log("form value: ", contactForm.value);

    // this.ContactsService.createContact(contactForm.value).subscribe((result)=>{
    //   console.log(result);
    // });
    
  }
  
}

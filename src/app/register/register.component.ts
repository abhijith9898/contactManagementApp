import { Component, OnInit } from '@angular/core';
import { ContactAppService } from '../contact-app.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private contactAppService: ContactAppService) { }

  ngOnInit(): void {
  }


  registerUser(registerForm){
    //console.log("this is the data",registerForm);

    this.contactAppService.registerUser(registerForm.value).subscribe(
      (res) =>{
        console.log(res)
      },
      (err) =>{
        console.log(err);
      }
    );
  }


  
}

import { Component, OnInit } from '@angular/core';
import { ContactAppService } from '../contact-app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private contactAppService: ContactAppService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(registerForm){
    //console.log("this is the data",registerForm);

    this.contactAppService.registerService(registerForm.value).subscribe(
      (res) =>{
        console.log(res)
      },
      (err) =>{
        console.log(err);
      }
    );
  }


  
}

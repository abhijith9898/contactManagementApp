import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { RegisterInfo } from '../auth/register-info';
import { MessageService } from 'primeng/api';
import { SessionStorageService } from '../auth/session-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  form: any = {};
  registerInfo: RegisterInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  message = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router, private sessionStorageService: SessionStorageService, private messageService: MessageService) { }

  ngOnInit(): void {
    if (this.sessionStorageService.getToken()) {
      this.router.navigate(['/home']);
    }
  }

  registerUser(registerForm) {
   
    this.registerInfo = new RegisterInfo(
      this.form.username,
      this.form.password
    );

    // console.log("this is the data",registerForm.value);

    if ( registerForm.value.username == undefined)
    {
      this.messageService.add({severity:'warn', detail: 'Enter a Username!'});
      
    }
    else if (registerForm.value.password == undefined)
    {
      this.messageService.add({severity:'warn', detail: 'Enter a Password!'});
    }
    else
    {
      this.authService.registerService(registerForm.value).subscribe(
        (res) => {
          //console.log(res);
          this.isSignedUp = true;
          this.isSignUpFailed = false;
          this.message = res;
          this.messageService.add({severity:'success', detail: 'Registration Successfull!'});
        },
        (err) => {
          console.log(err);
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
          this.messageService.add({severity:'error', summary: 'Registration Failed!', detail: this.errorMessage});
        });
    }
  }

}
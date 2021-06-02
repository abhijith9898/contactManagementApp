import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { RegisterInfo } from '../auth/register-info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  registerInfo: RegisterInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  message = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(registerForm) {
    console.log("this is the data",registerForm);

    this.registerInfo = new RegisterInfo(
      this.form.username,
      this.form.password
    );

    this.authService.registerService(registerForm.value).subscribe(
      (res) => {
        console.log(res);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        this.message = res;
      },
      (err) => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      });
  }

}
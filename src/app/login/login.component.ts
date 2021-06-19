import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { LoginInfo } from '../auth/login-info';
import { SessionStorageService } from '../auth/session-storage.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: LoginInfo;

  constructor(private authService: AuthService, private router: Router, private sessionStorageService: SessionStorageService, private messageService: MessageService) { }

  ngOnInit(): void {

    if (this.sessionStorageService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.sessionStorageService.getAuthorities();
      this.router.navigate(['/home']);
    }
  }

  loginUser(loginForm) {
    //console.log("this is the login data",loginForm);
    this.loginInfo = new LoginInfo(
      this.form.username,
      this.form.password);


      if ( loginForm.value.username == undefined)
    {
      this.messageService.add({severity:'warn', detail: 'Enter a Username!'});
      
    }
    else if (loginForm.value.password == undefined)
    {
      this.messageService.add({severity:'warn', detail: 'Enter a Password!'});
    }
    else
    {
    this.authService.loginService(loginForm.value).subscribe(
      (res) => {
        
        this.sessionStorageService.saveToken(res.accessToken);
        this.sessionStorageService.saveUsername(res.username);
        this.sessionStorageService.saveAuthorities(res.authorities);
        this.sessionStorageService.saveId(res.id);
        

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.sessionStorageService.getAuthorities();
        //this.reloadPage();
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log("login error", err);
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.messageService.add({severity:'error', summary: 'Login Failed!', detail: this.errorMessage});
      });
    }
  }


  reloadPage() {
    window.location.reload();
  }

}

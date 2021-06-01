import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { LoginInfo } from '../auth/login-info';
import { SessionStorageService } from '../auth/session-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: LoginInfo;

  constructor(private authService: AuthService, private router: Router, private sessionStorageService: SessionStorageService) { }

  ngOnInit(): void {

    if (this.sessionStorageService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.sessionStorageService.getAuthorities();
    }
  }

  loginUser(loginForm) {
    console.log("this is the login data",loginForm);
    this.loginInfo = new LoginInfo(
      this.form.username,
      this.form.password);

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
      });

  }


  reloadPage() {
    window.location.reload();
  }

}

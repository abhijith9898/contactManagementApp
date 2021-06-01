import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { SessionStorageService } from './auth/session-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  roles: string[];
  authority: string;

  constructor(private primengConfig: PrimeNGConfig, private sessionStorage: SessionStorageService) { }
  title = 'contactManagementApp';

  ngOnInit() {
    // if (this.sessionStorage.getToken()) {
    //   this.roles = this.sessionStorage.getAuthorities();
    //   //console.log("current role",this.roles);
    //   this.roles.every(role => {
    //     var a:any = Object.values(role);
    //     //console.log("a=", a[0]);
    //     if (a[0] === 'ROLE_USER') {
    //       this.authority = 'user';
    //       //console.log("this is user",role);
    //       return true;
    //     }
    //     else {
    //       this.authority = 'admin';
    //       //console.log("this is admin",Object.values(role));
    //       return true;
    //     }
    //   });
    // }
  }
}

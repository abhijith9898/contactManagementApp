import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from '../auth/session-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  info: any;

  constructor(private router: Router, private sessionStorage: SessionStorageService) { }

  ngOnInit(): void {

    this.info = {
      token: this.sessionStorage.getToken(),
      username: this.sessionStorage.getUsername(),
      //authority: this.sessionStorage.getAuthorities()
    };

    var authorityValue = this.sessionStorage.getAuthorities();
    

    authorityValue.every(authority => {
      var a:any = Object.values(authority);
      console.log("this is a",a[0]);
      this.info.authority = a[0];
    });

    
  }

  logout() {
    this.sessionStorage.signOut();
    window.location.reload();
  }

}

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

    console.log("this is the role in home", this.info.authority);
  }

  logout() {
    this.sessionStorage.signOut();
    //this.router.navigate(['/login']);
    this.reloadPage();
  }

  reloadPage() {
    window.location.reload();
  }

}

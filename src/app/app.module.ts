import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { UserContactsComponent } from './user-contacts/user-contacts.component';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { ContactsListComponent } from './user-contacts/contacts-list/contacts-list.component';
import {CardModule} from 'primeng/card';
import { AddcontactsComponent } from './user-contacts/addcontacts/addcontacts.component';
import {InputTextareaModule} from 'primeng/inputtextarea';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserContactsComponent,
    ContactsListComponent,
    AddcontactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    BrowserAnimationsModule,
    RouterModule,
    TabViewModule,
    PanelModule,
    CardModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

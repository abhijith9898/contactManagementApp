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
//import { ContactsListComponent } from './user-contacts/contacts-list/contacts-list.component';
import {CardModule} from 'primeng/card';
//import { AddcontactsComponent } from './user-contacts/addcontacts/addcontacts.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TableModule} from 'primeng/table';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ChipModule } from 'primeng/chip';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserContactsComponent,
    HomeComponent,
    AdminComponent
   
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
    InputTextareaModule,
    TableModule,
    ChipModule,
    AvatarModule,
    AvatarGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

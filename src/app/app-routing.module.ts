import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserContactsComponent } from './user-contacts/user-contacts.component';


const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'userContacts', component: UserContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

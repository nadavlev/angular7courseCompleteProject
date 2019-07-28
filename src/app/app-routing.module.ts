import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {Step1Component} from './step1/step1.component';
import {Step2Component} from './step2/step2.component';
import {Step3Component} from './step3/step3.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contact/:id', component: ContactComponent},
  {path: 'userList', component: UserListComponent},
  {path: 'userDetails/:id', component: UserDetailsComponent},
  {path: 'step1', component: Step1Component},
  {path: 'step2', component: Step2Component},
  {path: 'step3', component: Step3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

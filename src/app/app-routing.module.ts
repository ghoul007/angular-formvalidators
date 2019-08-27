import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {  ReactiveFormsModule} from "@angular/forms";
import { RegisterFGComponent } from './registerFormGroup/register-fg.component';
const routes: Routes = [
  {
    path:"", redirectTo: "register", pathMatch:'full' 
  },
  {
    path:"register", component: RegisterComponent
  },
  {
    path:"register-fg", component: RegisterFGComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

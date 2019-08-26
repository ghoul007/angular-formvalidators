import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.registerForm =  this.fb.group({
      username: ["", Validators.required],
      email: ["", [Validators.required, Validators.email, RegisterComponent.customEmail]],
      password: ["", Validators.required],
      repeatPassword: ["", Validators.required]
    })
  }


  static customEmail(control: AbstractControl): {[s:string]: boolean}| null{
    return (/([0-9a-zA-Z]([\+\-_\.][0-9a-zA-Z]+)*)+@(([0-9a-zA-Z][-\w]*[0-9a-zA-Z]*\.)+[a-zA-Z0-9]{2,17})$/)
    .exec(control.value)?null:{email: true}
    // ^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$
  }

  get username(){
    return this.registerForm.get('username')
  }
  get email(){
    return this.registerForm.get('email')
  }
  get password(){
    return this.registerForm.get('password')
  }
  get repeatPassword(){
    return this.registerForm.get('repeatPassword')
  }


  createForm(){
    console.log("hello")
  }

  resetForm(){
    this.registerForm.reset();
  }

}

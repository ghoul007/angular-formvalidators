import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { of, Observable, timer } from 'rxjs';
import { map, tap, timeout, delay } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  passGroup: FormGroup;
  blacklist = ["ahmed", "khaled"];
  blackEmailAsync$ = of(["ghoul.ahmed5@gmail.com", "ghoul.ahmed5@gmail.com"]).pipe(delay(5000))

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.passGroup = this.fb.group({
      password: ["", Validators.required],
      repeatPassword: ["", Validators.required]
    }, {
        validator: RegisterComponent.samePassValidator
      })
    this.registerForm = this.fb.group({
      username: ["", [Validators.required, this.checkUsername.bind(this)]],
      email: ["", [Validators.required, RegisterComponent.customEmail] , this.checkEmailAsync.bind(this)],
      passGroup: this.passGroup
    })
  }

  checkUsername(control: AbstractControl): { [s: string]: boolean } | null {
    if (control.value && control.value.trim().length === 0) {
      return null
    }
    return this.blacklist.includes(control.value) ? { username: true } : null
  }

  checkEmailAsync(control: AbstractControl):Observable< { [s: string]: boolean } | null >   {
    return this.blackEmailAsync$.pipe(map(res=> res.includes(control.value)?{exitEmail:true}:null))
  }

  static samePassValidator(control: AbstractControl): { [s: string]: boolean } | null {
    if (!control.get('password').value || control.get('password').value.trim().length === 0) {
      return null
    }
    return (control.get('password').value === control.get('repeatPassword').value) ? null : { pass: true }
  }

  static customEmail(control: AbstractControl): { [s: string]: boolean } | null {
    return (/([0-9a-zA-Z]([\+\-_\.][0-9a-zA-Z]+)*)+@(([0-9a-zA-Z][-\w]*[0-9a-zA-Z]*\.)+[a-zA-Z0-9]{2,17})$/)
      .exec(control.value) ? null : { email: true }
  }

  get username() {
    return this.registerForm.get('username')
  }
  get email() {
    return this.registerForm.get('email')
  }
  get password() {
    return this.registerForm.get('passGroup').get('password')
  }
  get passGroupField() {
    return this.registerForm.get('passGroup')
  }
  get repeatPassword() {
    return this.registerForm.get('passGroup').get('repeatPassword')
  }


  createForm() {
    console.log("hello")
  }

  resetForm() {
    this.registerForm.reset();
  }

}

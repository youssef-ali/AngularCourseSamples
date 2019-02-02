import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { changePasswordValidators } from './change-password.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent{
form: FormGroup; 
constructor(fb: FormBuilder){
  this.form = fb.group({
    oldPassword : new FormControl('',Validators.required, changePasswordValidators.validOldPassword),
    newPassword: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required)
  },{
    validator: changePasswordValidators.shouldBeMatch
  })
}

  get oldPassword(){
    return this.form.get("oldPassword");
  }
  get newPassword(){
    return this.form.get("newPassword");
  }
  get confirmPassword(){
    return this.form.get("confirmPassword");
  }
}

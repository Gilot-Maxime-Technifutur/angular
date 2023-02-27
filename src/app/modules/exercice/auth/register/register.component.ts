import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  response : string = ''

  pattern : string = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"


  registerForm : FormGroup = this._formBuilder.group({
    email : ['', [Validators.required, Validators.email]],
    pseudo : ['', [Validators.required]],
    password : ['', [Validators.required, Validators.pattern(this.pattern)]],
    confirmationPassword : ['', [Validators.required, Validators.pattern(this.pattern)]],
    cluf : [false, [Validators.requiredTrue]]
  }, {validators : this.comparePassword()})

  constructor(private _authService : AuthService, private _formBuilder : FormBuilder){}

// Un custom validator qui check que les passwords sont identiques.
  comparePassword() : ValidatorFn {
    return (control : AbstractControl) : ValidationErrors | null => {
      return control.get('password')?.value == control.get('confirmationPassword')?.value ? null : {samePassword : false}
      }
    }

  register(){

    let values = this.registerForm.value;

    this.response = this._authService.register(values.pseudo, values.email, values.password)

  }


}

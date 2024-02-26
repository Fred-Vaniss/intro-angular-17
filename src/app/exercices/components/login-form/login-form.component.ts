import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {IErrors} from "./errors";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  providers: [
    MessageService
  ]
})
export class LoginFormComponent implements OnInit{

  constructor(
    private _formBuilder: FormBuilder,
    private _msgService: MessageService
  ) {}

  formGroup! : FormGroup;

  ngOnInit() {

    this.formGroup = this._formBuilder.group({
      login: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(32),
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(32),
        this.matchPassword()
      ]]
    })

  }

  login() : void {

    if (this.formGroup.valid){

      this._msgService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Form validated'
      })

    } else {

      this._msgService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Form is invalid'
      })

    }
  }

  err(form: string, errCode: string){
    return this.formGroup.get(form)?.hasError(errCode) as boolean
  }

  matchPassword() : ValidatorFn | null {

    return(control: AbstractControl) : ValidationErrors | null => {

      let errors : IErrors = {};

      if ( !/^(?=.*[0-9])/.test(control.value) ) {
        errors.missingNumber = true
      }

      if ( !/^(?=.*[a-z])/.test(control.value) ) {
        errors.missingLowerCase = true
      }

      if ( !/^(?=.*[A-Z])/.test(control.value) ) {
        errors.missingUpperCase = true
      }

      if ( !/^(?=.*[@#$%^&+=])/.test(control.value) ) {
        errors.missingSpecialCharacter = true
      }

      // const regEx : RegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/
      // const isValid = regEx.test(control.value)

      return Object.keys(errors).length === 0 ? null : errors;

    }

  }


}

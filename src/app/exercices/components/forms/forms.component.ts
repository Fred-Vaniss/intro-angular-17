import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {User} from "./user";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit{

  constructor(private _formBuilder : FormBuilder) {}

  formGroup! : FormGroup;

  ngOnInit() : void {

    this.formGroup = this._formBuilder.group({
      firstName: [null, [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3)
      ]],
      lastName: [null, [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3)
      ]],
      eMail: [null, [
        Validators.required,
        Validators.email,
        Validators.maxLength(30),
        Validators.minLength(3)
      ]],
      pWord: ['', [
        Validators.required,
        Validators.maxLength(40),
        Validators.minLength(3)
      ]],
      pWordConf: ['', [
        Validators.required,
        Validators.maxLength(40),
        Validators.minLength(3),

      ]],
      address: [null, [
        Validators.required,
        Validators.maxLength(40),
        Validators.minLength(3)
      ]],
      phone: [null, [
        Validators.required,
        Validators.maxLength(40),
        Validators.minLength(3)
      ]],
      birthday: [new Date(), [
        Validators.required,
      ]],
      myArray: this._formBuilder.array([])
    }, {validators: this.matchPassword()})

  }

  get getArray() : FormArray {
    return this.formGroup.get('myArray') as FormArray
  }

  addArrayEl() : void {
    this.getArray.push(new FormControl("",[Validators.required]))

    console.log(this.getArray)
  }

  removeArrayEl(index : number) : void {
    this.getArray.removeAt(index);
  }

  submitForm() : void {

    let values = this.formGroup.value

    let user : User = {
      firstName: values.firstName,
      lastName: values.lastName,
      eMail: values.eMail,
      password: values.pWord,
      address: values.address,
      phone: values.phone,
      birthdate: values.birthday
    }

    console.log(user)
    console.log(this.formGroup)
  }

  matchPassword() : ValidatorFn | null {
    return (control: AbstractControl) : ValidationErrors | null => {
      return control.value.pWord === control.value.pWordConf ? null : { PasswordMismatch : true }
    }
  }
}

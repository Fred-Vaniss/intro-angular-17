import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
      firstName: ['Jean', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3)
      ]],
      lastName: ['Dujardin', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3)
      ]],
      eMail: ['jean@du.com', [
        Validators.required,
        Validators.email,
        Validators.maxLength(30),
        Validators.minLength(3)
      ]],
      pWord: ['1234', [
        Validators.required,
        Validators.maxLength(40),
        Validators.minLength(3)
      ]],
      pWordConf: ['1234', [
        Validators.required,
        Validators.maxLength(40),
        Validators.minLength(3),
      ]],
      address: ['1234', [
        Validators.required,
        Validators.maxLength(40),
        Validators.minLength(3)
      ]],
      phone: ['1234', [
        Validators.required,
        Validators.maxLength(40),
        Validators.minLength(3)
      ]],
      birthday: [new Date(), [
        Validators.required,
      ]],
    })

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

  debug(event: any) : void {
    console.log(event.toLocaleDateString())
  }
}

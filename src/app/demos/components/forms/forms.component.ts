import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {

  constructor(private _formBuilder : FormBuilder) {
  }

  formGroup! : FormGroup

  ngOnInit(): void {

    this.formGroup = this._formBuilder.group({
      control1 : [null, [Validators.required, Validators.maxLength(30)]],
      control2 : ['test', [Validators.required]]
    })

  }

  submit() : void {
    console.log(this.formGroup)
  }

}

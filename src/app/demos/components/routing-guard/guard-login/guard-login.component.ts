import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {AuthentificationService} from "../../../services/authentification.service";

@Component({
  selector: 'app-guards-login',
  templateUrl: './guard-login.component.html',
  styleUrl: './guard-login.component.scss',
  providers: [
    MessageService
  ]
})
export class GuardLoginComponent implements OnInit{

  loginForm! : FormGroup;

  constructor(
    private _builder : FormBuilder,
    private _toast : MessageService,
    private _router : Router,
    private _authService : AuthentificationService
  ) {}

  ngOnInit() {
    this.loginForm = this._builder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(32)
      ]]
    })
  }

  submit(): void {
    if(!this.loginForm.valid){
      this._toast.add({
        severity: 'error',
        summary: 'Invalid form',
      })
      return
    }

    if( this._authService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value) )
    {
      this._router.navigate(['demos','guards'])
    }

    this._toast.add({
      severity: 'error',
      summary: 'E-mail or password invalid',
    })

  }

  protected readonly onkeydown = onkeydown;
}

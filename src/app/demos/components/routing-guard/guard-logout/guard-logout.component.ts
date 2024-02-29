import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthentificationService} from "../../../services/authentification.service";

@Component({
  selector: 'app-guards-logout',
  templateUrl: './guard-logout.component.html',
  styleUrl: './guard-logout.component.scss'
})
export class GuardLogoutComponent {

constructor(
  private _router : Router,
  private _authService : AuthentificationService
) {}

  public validate() {
    this._authService.logout();
    this._router.navigate(['demos','guards','login']);
  }

  public cancel(): void {
    this._router.navigate(['demos','guards'])
  }
}

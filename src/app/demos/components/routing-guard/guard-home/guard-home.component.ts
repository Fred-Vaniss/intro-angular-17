import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../../../services/authentification.service";

@Component({
  selector: 'app-guards-home',
  templateUrl: './guard-home.component.html',
  styleUrl: './guard-home.component.scss'
})
export class GuardHomeComponent implements OnInit{

  userEmail : string | null = null;

  constructor(private _service : AuthentificationService) {
    this.userEmail = this._service.currentUserMail;
  }

  ngOnInit() {
    //todo: verify if connected
  }
}

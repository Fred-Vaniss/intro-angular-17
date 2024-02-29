import {CanActivateFn, Router} from '@angular/router';
import {AuthentificationService} from "../services/authentification.service";
import {inject} from "@angular/core";

export const mustBeLogged: CanActivateFn = (route, state) => {

  const _authService : AuthentificationService = inject(AuthentificationService)
  const _router : Router = inject(Router)

  if (!_authService.isConnected){
    _router.navigate(['demos','guards','login'])
  }

  return _authService.isConnected;

};

export const mustBeAnomymous: CanActivateFn = (route, state) => {

  const _authService : AuthentificationService = inject(AuthentificationService)

  return !_authService.isConnected;

};

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private _users : any[] = [
    {email: 'user@admin.com', password: '12345'},
    {email: 'geo.lafrite@gmail.com', password: '12345'}
  ]

  currentUserMail : string | null = null;

  public get isConnected() : boolean {
    return this.currentUserMail !== null;
  }

  constructor() { }

  public login(email: string, password: string) : boolean {

    if( this._users.find( u => u.email === email && u.password === password ) )
    {
      this.currentUserMail = email;
    }

    return this.isConnected;
  }

  public logout() : void {
    this.currentUserMail = null;
  }
}

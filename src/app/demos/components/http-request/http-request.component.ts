import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, ObservableInput, throwError} from "rxjs";
import {Message, MessageService} from "primeng/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginForm, TokenResponse} from "./login.interface";

interface User {
  id: number,
  nickName: string,
  email: string,
}

@Component({
  selector: 'app-_http-request',
  templateUrl: './http-request.component.html',
  styleUrl: './http-request.component.scss',
  providers: [MessageService]
})
export class HttpRequestComponent implements OnInit{

  private _userUrl = "https://localhost:7256/api/user/"

  public formGroup! : FormGroup;

  public messages : Message[] = [
    {severity: 'info', summary:'does it work?'}
  ];

  constructor(
    private _http: HttpClient,
    private _formBuilder : FormBuilder,
    private _messageService : MessageService
  ){}

  result! : User[];

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })

    this.list();
  }

  public submitLogin() : void {
    if(!this.formGroup.valid){
      console.error("Form invalid")
      return;
    }

    const values = this.formGroup.value

    const form : LoginForm = {
      email: values.email,
      password: values.password
    }

    this.login(form)
      .subscribe(
      response => {
        console.log(response)
        this._messageService.add({severity: 'success', summary: 'Logged in'})
        sessionStorage.setItem('token', response.token)
      }
    )
  }

  public logout() : void {
    sessionStorage.removeItem('token')
    this._messageService.add({severity: 'success', summary: 'Logged out'})
  }

  public list() : void {
    this.getAll().subscribe(
      ( data: User[] ) => {
        this.result = data
        this._messageService.add({severity: 'success', summary: 'Fetched users'})
      }
    )
  }

  public consolePrint(){
    console.log(this.result);
  }

  public getDetails(id : number) {
    this.get(id)
      .subscribe(
        (data : User) => {
          console.log(data)
        }
      )
  }

  // API requests
  //////////////////////////

  private setHeader() : HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/json; charset=utf-8'
    });
  }

  private getAll() : Observable<User[]> {
    return this._http
      .get<User[]>(this._userUrl)
      .pipe(catchError( (error) => {
        return this.handleError(error, 'Failed to fetch users', 'API may be shut down')
      } ))
  }

  private get(id: number) : Observable<User> {
    return this._http.get<User>(this._userUrl+id, {headers: this.setHeader()})
      .pipe(catchError( (error : HttpErrorResponse) => {
        return this.handleError(error, `Failed to get user details: ${error.status}`, error.message)
      } ))
  }

  private login(form: LoginForm) : Observable<TokenResponse> {
    return this._http
      .post<TokenResponse>(this._userUrl+"login", form)
      .pipe(catchError( (error) => {
        return this.handleError(error, `Failed to login: ${error.status}`, error.message)
      }));

  }

  private handleError(error: HttpErrorResponse, message: string, detail: string = ''): ObservableInput<any>{
    console.log(error);
    this._messageService.add({severity: 'error', summary: message, detail: detail});
    return throwError( () => {
      return new Error(message)
    } )
  }
}

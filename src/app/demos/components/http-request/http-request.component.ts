import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

interface IUser {
  id: number,
  nickname: string,
  email: string,
}

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrl: './http-request.component.scss'
})
export class HttpRequestComponent implements OnInit{

  constructor(private http: HttpClient){}

  result! : IUser[];

  ngOnInit() {
    this.http.get<IUser[]>("https://localhost:7256/api/User").subscribe(data => {
      this.result = data

    })

  }

  consolePrint(){
      console.log(this.result);
  }
}

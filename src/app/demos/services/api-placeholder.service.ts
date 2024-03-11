import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../interfaces/post.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiPlaceholderService {

  constructor(
    private _http : HttpClient
  ) { }

  public get()  {
    return this._http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }


}

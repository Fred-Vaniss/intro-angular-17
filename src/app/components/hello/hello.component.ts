import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {
  name : string = "Fred";
  age : number = 31;
  birthdate : Date = new Date('1993-02-11');
  isAdmin : boolean = false;

  ingredients : Array<string> = ["sugar", "salt", "pepper"];

  myStyle : object = {color: "red", fontWeight: "bold"};
}

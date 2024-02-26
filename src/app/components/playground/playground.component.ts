import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent implements OnInit{

  logs : any[] = [];

  ngOnInit() {
    this.addOutput("test")
    this.testBool()
  }

  public addOutput(str : any) : void{

    this.logs.push(str);
    console.log(str);

  }

  public testBool() : void {

    const test1 : any = undefined

    const test2 : boolean = Boolean(test1) ;

    this.addOutput(String(test2))

  }

  public clearLogs() {
    this.logs = [];
  }
}

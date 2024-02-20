import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  inputText: string = "";

  list : string[] = [];

  submit() : void {
    this.list.push(this.inputText);
    this.inputText = "";
  }

  delete(index: number) : void{
    this.list.splice(index,1);
  }
}

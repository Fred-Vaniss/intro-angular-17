import {Component} from '@angular/core';

@Component({
  selector: 'app-shopping-parent',
  templateUrl: './shopping-parent.component.html',
  styleUrl: './shopping-parent.component.scss'
})
export class ShoppingParentComponent {


  inputText : string = "";

  list : string[] = []


  submit() : void {
    this.list.push(this.inputText)

    this.inputText = "";
  }

  deleteReceive(index: number){
    this.list.splice(index,1);
  }
}

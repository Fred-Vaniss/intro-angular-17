import { Component } from '@angular/core';
import {ShoppingService} from "../../../services/shopping.service";

@Component({
  selector: 'app-shopping-with-service-parent',
  templateUrl: './shopping-with-service-parent.component.html',
  styleUrl: './shopping-with-service-parent.component.scss'
})
export class ShoppingWithServiceParentComponent {

  constructor( private _shoppingService: ShoppingService ){}

  inputText : string = "";

  list: string[] = [];

  submit() : void {
    this._shoppingService.addItem(this.inputText);
    this.inputText = "";
  }
}

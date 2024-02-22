import { Component } from '@angular/core';
import {ShoppingService} from "../../../services/shopping.service";

@Component({
  selector: 'app-shopping-with-service-enfant',
  templateUrl: './shopping-with-service-enfant.component.html',
  styleUrl: './shopping-with-service-enfant.component.scss'
})
export class ShoppingWithServiceEnfantComponent {

  constructor( private _shoppingService: ShoppingService ){}

  public get listService() : string[] {
    return this._shoppingService.list
  }

  deleteItem(index: number) : void {
    this._shoppingService.delete(index);
  }
}

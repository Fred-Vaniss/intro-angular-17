import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  constructor() { }

  list :  Record<string, number> = {
    "Pomme": 1,
    "Poire": 4,
    "Bananes": 3
  } ;

  addItem(item: string): void {
    if (this.list[item]) {
      this.list[item]++
      return;
    }

    this.list[item] = 1;
  }

  delete(index: string): void{
    delete this.list[index];
  }
}

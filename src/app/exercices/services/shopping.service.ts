import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  constructor() { }

  list : string[] = [];

  addItem(item: string): void {
    this.list.push(item);
  }

  delete(index: number): void{
    this.list.splice(index, 1);
  }
}

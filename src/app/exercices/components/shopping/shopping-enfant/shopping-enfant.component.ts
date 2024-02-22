import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-shopping-enfant',
  templateUrl: './shopping-enfant.component.html',
  styleUrl: './shopping-enfant.component.scss'
})
export class ShoppingEnfantComponent {

  constructor() {
    this.deleteEvent = new EventEmitter<number>();
  }

  @Input()
  itemsList! : string[];

  @Output()
  deleteEvent: EventEmitter<number>;

  deleteItem(index: number){

    this.deleteEvent.next(index);

  }
}

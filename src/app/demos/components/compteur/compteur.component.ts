import { Component } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrl: './compteur.component.scss'
})
export class CompteurComponent {
  count : number = 0;

  increment() : void {
    this.count++;
  }

  decrement() : void {
    this.count--;
  }
}

import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {IMenu} from "./components/navbar/IMenu";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'demo';

  constructor(private primengConfig : PrimeNGConfig) {}

  menu: Array<IMenu> = [
    { route: 'home', label: 'Home' },
    { route: 'exos', label: 'Exercices'},
    { route: 'demos', label: 'Demos'}
  ]

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}

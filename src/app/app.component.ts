import {Component, OnInit} from '@angular/core';
import {MenuItem, PrimeNGConfig} from "primeng/api";
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

  items: MenuItem[] | undefined;



  ngOnInit() {
    this.primengConfig.ripple = true;

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Demos',
        items: [
          {
            label: 'Compteur',
            routerLink: 'demos/count'
          },
          {
            label: 'Http Request',
            routerLink: 'demos/request'
          },
          {
            label: 'Forms' ,
            routerLink: 'demos/forms'
          }
        ]
      },
      {
        label: 'Exos',
        items: [
          {
            label: 'Stopwatch',
            routerLink: 'exos/chrono'
          },
          {
            label : 'Checklist',
            routerLink: 'exos/list'
          },
          {
            label : 'Shopping list',
            routerLink: 'exos/shopping'
          },
          {
            label : 'Shopping list with service',
            routerLink: 'exos/shopping-service'
          },
          {
            label: 'Forms',
            routerLink: 'exos/forms'
          }
        ]
      }
    ]
  }
}

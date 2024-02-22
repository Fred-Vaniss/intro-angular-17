import { Component } from '@angular/core';
import {IMenu} from "../components/navbar/IMenu";

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrl: './exercices.component.scss'
})
export class ExercicesComponent {
  menu : Array<IMenu> = [
    {route: 'chrono', label: 'Stop watch'},
    {route: 'list', label: 'Checklist'},
    {route: 'shopping', label: 'Shopping list'}
  ]
}

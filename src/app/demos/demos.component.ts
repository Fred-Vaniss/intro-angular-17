import { Component } from '@angular/core';
import {IMenu} from "../components/navbar/IMenu";

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrl: './demos.component.scss'
})
export class DemosComponent {
  menu: Array<IMenu> = [
    { route: 'hello', label: 'Hello!'},
    { route: 'count', label: 'Count'},
    { route: 'directive', label: 'Custom directives' }
  ]
}

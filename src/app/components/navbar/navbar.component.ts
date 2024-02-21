import {Component, Input} from '@angular/core';
import {IMenu} from "./IMenu";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() menu: Array<IMenu> | undefined;
}

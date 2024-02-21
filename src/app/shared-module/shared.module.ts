import { NgModule } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {CheckboxModule} from "primeng/checkbox";
import {NavbarComponent} from "../components/navbar/navbar.component";
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    RouterLink,
    CommonModule
  ],
  exports: [
    NavbarComponent,
    ButtonModule,
    InputTextModule,
    FormsModule,
    TableModule,
    ToastModule,
    ConfirmPopupModule,
    CheckboxModule,
    CommonModule
  ]
})
export class SharedModule { }

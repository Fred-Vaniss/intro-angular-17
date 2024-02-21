import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {CheckboxModule} from "primeng/checkbox";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    FormsModule,
    TableModule,
    ToastModule,
    ConfirmPopupModule,
    CheckboxModule
  ]
})
export class SharedModule { }

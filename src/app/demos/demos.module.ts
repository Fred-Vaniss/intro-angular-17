import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';
import {CompteurComponent} from "./components/compteur/compteur.component";
import {SharedModule} from "../shared-module/shared.module";


@NgModule({
  declarations: [
    DemosComponent,
    CompteurComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DemosRoutingModule
  ]
})
export class DemosModule { }

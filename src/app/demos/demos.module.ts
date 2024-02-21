import { NgModule } from '@angular/core';

import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';
import {CompteurComponent} from "./components/compteur/compteur.component";

import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { HighlightDirective } from './components/custom-directive/highlight.directive';
import {SharedModule} from "../shared-module/shared.module";
import {HelloComponent} from "./components/hello/hello.component";


@NgModule({
  declarations: [
    DemosComponent,
    CompteurComponent,
    CustomDirectiveComponent,
    HighlightDirective,
    HelloComponent
  ],
  imports: [
    SharedModule,
    DemosRoutingModule
  ]
})
export class DemosModule { }

import { NgModule } from '@angular/core';

import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';
import {CompteurComponent} from "./components/compteur/compteur.component";

import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { HighlightDirective } from './components/custom-directive/highlight.directive';
import {SharedModule} from "../shared-module/shared.module";
import {HelloComponent} from "./components/hello/hello.component";
import { HttpRequestComponent } from './components/http-request/http-request.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    DemosComponent,
    CompteurComponent,
    CustomDirectiveComponent,
    HighlightDirective,
    HelloComponent,
    HttpRequestComponent
  ],
  imports: [
    SharedModule,
    DemosRoutingModule,
    HttpClientModule
  ]
})
export class DemosModule { }

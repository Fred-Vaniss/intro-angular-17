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
import { FormsComponent } from './components/forms/forms.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DemosComponent,
    CompteurComponent,
    CustomDirectiveComponent,
    HighlightDirective,
    HelloComponent,
    HttpRequestComponent,
    FormsComponent
  ],
  imports: [
    SharedModule,
    DemosRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DemosModule { }

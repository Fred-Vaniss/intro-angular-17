import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { ExercicesComponent } from './exercices.component';
import {ListComponent} from "./components/list/list.component";
import {RouterModule} from "@angular/router";
import {ChronoComponent} from "./components/chrono/chrono.component";
import {TimerPipe} from "./pipes/timer.pipe";
import {SharedModule} from "../shared-module/shared.module";


@NgModule({
  declarations: [
    ExercicesComponent,
    ListComponent,
    ChronoComponent,
    TimerPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ExercicesRoutingModule,
  ]
})
export class ExercicesModule { }

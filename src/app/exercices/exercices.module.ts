import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { ExercicesComponent } from './exercices.component';
import {ListComponent} from "./components/list/list.component";
import {RouterModule} from "@angular/router";
import {ChronoComponent} from "./components/chrono/chrono.component";
import {TimerPipe} from "./pipes/timer.pipe";
import {SharedModule} from "../shared-module/shared.module";
import { ShoppingParentComponent } from './components/shopping/shopping-parent/shopping-parent.component';
import { ShoppingEnfantComponent } from './components/shopping/shopping-enfant/shopping-enfant.component';
import { ShoppingWithServiceParentComponent } from './components/shopping-w-service/shopping-with-service-parent/shopping-with-service-parent.component';
import { ShoppingWithServiceEnfantComponent } from './components/shopping-w-service/shopping-with-service-enfant/shopping-with-service-enfant.component';
import { FormsComponent } from './components/forms/forms.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";


@NgModule({
  declarations: [
    ExercicesComponent,
    ListComponent,
    ChronoComponent,
    TimerPipe,
    ShoppingParentComponent,
    ShoppingEnfantComponent,
    ShoppingWithServiceParentComponent,
    ShoppingWithServiceEnfantComponent,
    FormsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ExercicesRoutingModule,
    ReactiveFormsModule,
    CalendarModule
  ]
})
export class ExercicesModule { }

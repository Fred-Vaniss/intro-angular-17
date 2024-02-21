import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./components/list/list.component";
import {ExercicesComponent} from "./exercices.component";
import {ChronoComponent} from "./components/chrono/chrono.component";

const routes: Routes = [
  { path: '', component: ExercicesComponent, children: [
      { path: 'chrono', component: ChronoComponent },
      { path:'list', component: ListComponent },
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercicesRoutingModule { }

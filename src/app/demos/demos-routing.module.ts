import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DemosComponent} from "./demos.component";
import {CompteurComponent} from "./components/compteur/compteur.component";

const routes: Routes = [
  { path:'', component: DemosComponent, children: [
      { path: 'count', component: CompteurComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }

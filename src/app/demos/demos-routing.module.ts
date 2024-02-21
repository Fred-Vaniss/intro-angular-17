import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DemosComponent} from "./demos.component";
import {CompteurComponent} from "./components/compteur/compteur.component";
import {CustomDirectiveComponent} from "./components/custom-directive/custom-directive.component";
import {HelloComponent} from "./components/hello/hello.component";

const routes: Routes = [
  { path:'', component: DemosComponent, children: [
      { path: 'hello', component: HelloComponent},
      { path: 'count', component: CompteurComponent },
      { path: 'directive', component: CustomDirectiveComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }

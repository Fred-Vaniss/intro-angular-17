import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DemosComponent} from "./demos.component";
import {CompteurComponent} from "./components/compteur/compteur.component";
import {CustomDirectiveComponent} from "./components/custom-directive/custom-directive.component";
import {HelloComponent} from "./components/hello/hello.component";
import {HttpRequestComponent} from "./components/http-request/http-request.component";

const routes: Routes = [
  { path:'', component: DemosComponent, children: [
      { path: 'hello', component: HelloComponent},
      { path: 'count', component: CompteurComponent },
      { path: 'directive', component: CustomDirectiveComponent },
      { path: 'request', component: HttpRequestComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }

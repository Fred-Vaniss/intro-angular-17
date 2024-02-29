import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DemosComponent} from "./demos.component";
import {CompteurComponent} from "./components/compteur/compteur.component";
import {CustomDirectiveComponent} from "./components/custom-directive/custom-directive.component";
import {HelloComponent} from "./components/hello/hello.component";
import {HttpRequestComponent} from "./components/http-request/http-request.component";
import {FormsComponent} from "./components/forms/forms.component";
import {RoutingParamsComponent} from "./components/routing-params/routing-params.component";
import {GuardHomeComponent} from "./components/routing-guard/guard-home/guard-home.component";
import {GuardLoginComponent} from "./components/routing-guard/guard-login/guard-login.component";
import {GuardLogoutComponent} from "./components/routing-guard/guard-logout/guard-logout.component";
import {mustBeAnomymous, mustBeLogged} from "./guards/can-activate.guard";

const routes: Routes = [
  { path:'', component: DemosComponent, children: [
      { path: 'hello', component: HelloComponent},
      { path: 'count', component: CompteurComponent },
      { path: 'directive', component: CustomDirectiveComponent },
      { path: 'request', component: HttpRequestComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'routing-params/:id', component: RoutingParamsComponent },
      { path: 'guards', component: GuardHomeComponent },
      { path: 'guards/login', component: GuardLoginComponent, canActivate : [mustBeAnomymous]},
      { path: 'guards/logout', component: GuardLogoutComponent, canActivate : [mustBeLogged]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }

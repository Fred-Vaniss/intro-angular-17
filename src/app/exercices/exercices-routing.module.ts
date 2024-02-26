import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./components/list/list.component";
import {ExercicesComponent} from "./exercices.component";
import {ChronoComponent} from "./components/chrono/chrono.component";
import {ShoppingParentComponent} from "./components/shopping/shopping-parent/shopping-parent.component";
import {
  ShoppingWithServiceParentComponent
} from "./components/shopping-w-service/shopping-with-service-parent/shopping-with-service-parent.component";
import {FormsComponent} from "./components/forms/forms.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";

const routes: Routes = [
  { path: '', component: ExercicesComponent, children: [
      { path: 'chrono', component: ChronoComponent },
      { path:'list', component: ListComponent },
      { path:'shopping', component: ShoppingParentComponent },
      { path:'shopping-service', component: ShoppingWithServiceParentComponent },
      { path:'forms', component: FormsComponent },
      { path:'login', component: LoginFormComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercicesRoutingModule { }

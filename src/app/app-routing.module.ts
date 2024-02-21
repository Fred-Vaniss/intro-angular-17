import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ChronoComponent} from "./components/chrono/chrono.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ListComponent} from "./components/list/list.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'chrono', component: ChronoComponent },
  { path: 'list', component: ListComponent},

  // Redirection vers home
  { path: '', pathMatch: 'full', redirectTo: 'home'},

  // Chemin non reconnu
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {PlaygroundComponent} from "./components/playground/playground.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'demos', loadChildren: () => import('./demos/demos.module').then(m => m.DemosModule)},
  { path: 'exos', loadChildren: () => import('./exercices/exercices.module').then(m => m.ExercicesModule)},

  { path: 'playground', component: PlaygroundComponent },

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

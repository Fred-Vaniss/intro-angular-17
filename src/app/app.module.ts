import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { CompteurComponent } from './components/compteur/compteur.component';
import { ChronoComponent } from './components/chrono/chrono.component';
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RippleModule} from "primeng/ripple";
import { TimerPipe } from './pipes/timer.pipe';
import { ListComponent } from './components/list/list.component';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CompteurComponent,
    ChronoComponent,
    TimerPipe,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RippleModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

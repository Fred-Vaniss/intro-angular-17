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

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CompteurComponent,
    ChronoComponent,
    TimerPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RippleModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

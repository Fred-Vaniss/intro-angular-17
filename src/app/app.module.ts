import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from "primeng/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RippleModule } from "primeng/ripple";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { CheckboxModule } from "primeng/checkbox";
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RippleModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    TableModule,
    ToastModule,
    ConfirmPopupModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';

import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';
import {CompteurComponent} from "./components/compteur/compteur.component";

import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { HighlightDirective } from './components/custom-directive/highlight.directive';
import {SharedModule} from "../shared-module/shared.module";
import {HelloComponent} from "./components/hello/hello.component";
import { HttpRequestComponent } from './components/http-request/http-request.component';
import { FormsComponent } from './components/forms/forms.component';
import { RoutingParamsComponent } from './components/routing-params/routing-params.component';
import { GuardHomeComponent } from './components/routing-guard/guard-home/guard-home.component';
import { GuardLoginComponent } from './components/routing-guard/guard-login/guard-login.component';
import { GuardLogoutComponent } from './components/routing-guard/guard-logout/guard-logout.component';
import {MessagesModule} from "primeng/messages";
import { ResolverComponent } from './components/resolver/resolver.component';
import {InterceptorComponent} from "./components/interceptor/interceptor.component";
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors} from "@angular/common/http";
import {authInterceptor} from "./components/interceptor/auth.interceptor";


@NgModule({
  declarations: [
    DemosComponent,
    CompteurComponent,
    CustomDirectiveComponent,
    HighlightDirective,
    HelloComponent,
    HttpRequestComponent,
    FormsComponent,
    RoutingParamsComponent,
    GuardHomeComponent,
    GuardLoginComponent,
    GuardLogoutComponent,
    ResolverComponent,
    InterceptorComponent
  ],
  imports: [
    SharedModule,
    DemosRoutingModule,
    MessagesModule,
  ],
  providers: [
    provideHttpClient( withInterceptors([authInterceptor]) )
  ]
})
export class DemosModule { }

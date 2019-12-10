import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Import for Routing
import { AppRoutingModule } from './app-routing.module';
//Import Components
import { AppComponent } from './app.component';
import { PackageGetComponent } from './package-get/package-get.component';
//Import Service Providers
import { LoginService } from './login.service';
import { PackageDetailsComponent } from './package-details/package-details.component'

import { PackageDetailsResolver } from './package-details-resolver'
import { Resolver } from './resolver';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    PackageGetComponent,
    PackageDetailsComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService, PackageDetailsResolver, Resolver],
  bootstrap: [AppComponent]
})
export class AppModule { }

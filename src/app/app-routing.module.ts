import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackageGetComponent } from './package-get/package-get.component';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { PackageBean } from './Model/PackageBean';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component'
import {PackageDetailsResolver} from './package-details-resolver'

import { Resolver } from './resolver';



const routes: Routes = [{ path:"packages",component:PackageGetComponent, resolve: {packages: Resolver}},
                        {  path: '', redirectTo: '/packages', pathMatch: 'full' , resolve: {packages: Resolver}},
                        {  path: 'cart', component:ShoppingCartComponent },
                        { path: 'packageDetail/:id', component: PackageDetailsComponent, resolve: {  selectedPackage: PackageDetailsResolver} }

                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

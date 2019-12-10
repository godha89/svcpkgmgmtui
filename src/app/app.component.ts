import { Component, OnInit } from '@angular/core';

import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { NavigationCancel,
        Event,
        NavigationEnd,
        NavigationError,
        NavigationStart,
        Router } from '@angular/router';

import {CartService} from './cart.service';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html' ,
  styles: []
})
export class AppComponent implements OnInit{
  title = 'Package_Shop';

  totalPrice: number;

  totalItems: number ;
  

  constructor(private loadingBar: SlimLoadingBarService, private router: Router, private cartService: CartService) {
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }
  
  ngOnInit() {
    this.totalPrice = this.cartService.totalCost();

    console.log("Total Cost :: "+ this.totalPrice);
    this.totalItems = this.cartService.packages.length;
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this.loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this.loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this.loadingBar.stop();
    }
  }
}

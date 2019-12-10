import { Component, OnInit } from '@angular/core';
import {PackageBean} from '../Model/PackageBean';
import {CartService} from '../cart.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  title:"shopping Cart";
  packages: PackageBean[];

  totalItems: number;

  totalCost: number;

  totalDiscount: number = 0;;

  constructor(private cartService: CartService) { }


  ngOnInit() {
    this.packages = this.cartService.packages;
    this.totalCost = this.cartService.totalCost();
    this.totalItems = this.packages.length;
    
    if(this.packages.length > 1){
      this.totalDiscount = this.cartService.totalDiscountApplied(this.totalCost);
    }
  }

 
}

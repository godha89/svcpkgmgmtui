import { Injectable } from '@angular/core';

import {PackageBean} from './Model/PackageBean';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  packages: PackageBean[] = [];


  addPackage(packageBean: PackageBean){
    this.packages.push(packageBean);
  }


  totalCost() : number{
    
    var cost = 0;
    this.packages.forEach(packageBean => {

      cost = cost+packageBean.price;
      
    });

    if(this.packages.length > 1){
      console.log("Apply 10% Discount");

      cost = cost - (cost * 0.1);
    }
console.log("Apply cost " + cost);
    return cost;
  }

  totalDiscountApplied(totalPrice: number) : number{
    return totalPrice * 0.1;
  }

  
  constructor() { }
}

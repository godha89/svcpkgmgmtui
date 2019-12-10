import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PackageBean } from './Model/PackageBean';

import {CartService} from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

    getAllPackages_uri = 'http://localhost:8761/api/package/allPackages';
    getPackageDetail_uri = 'http://localhost:8761/api/package/fetchPackage';


  constructor(private http: HttpClient, private cartService: CartService) { }


 getPackages() {
    return this
           .http
           .get(`${this.getAllPackages_uri}`);
  }

 getPackageDetails(id: string){
    return this
           .http
           .get<PackageBean>(`${this.getPackageDetail_uri}/${id}`);
  }


addToCart(packageBean: PackageBean){
  this.cartService.addPackage(packageBean);
}

totalCost() : number{
  return this.cartService.totalCost();
}

}

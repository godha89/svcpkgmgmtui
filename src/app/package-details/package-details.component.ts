import { Component, OnInit,Input } from '@angular/core';
import {PackageBean} from '../Model/PackageBean';

import {PackageService} from '../package.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { AppComponent } from '../app.component';


@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css']
})
export class PackageDetailsComponent implements OnInit {

   @Input() id: string; 
  selectedPackage: PackageBean; 
  addedToCart: String;

  constructor(private route: ActivatedRoute, private router: Router,private packageService: PackageService, private header : AppComponent) { }

  
  
  ngOnInit() {
     /* this.route.params.subscribe( params => { this.packageService.getPackageDetails(params['id'])
      .subscribe((data: PackageBean) => {
        this.selectedPackage = data;
        console.log("packageDetails: "+ data); // Has a value
        console.log("packageDetails: " + this.selectedPackage); // Has a value
    });
    
  });
  
  */
      
      this.selectedPackage=this.route.snapshot.data.selectedPackage;

      if(this.selectedPackage == null){
        this.goBack();
      }
      
    
  }

  addToCart(packageBean: PackageBean) : void {
    this.packageService.addToCart(packageBean);
    this.addedToCart = packageBean.id + " added to cart";
    this.header.ngOnInit();
  }

  goBack(){
      this.router.navigate(['packages']);

  }

  close(){
    this.addedToCart = null;
  }
}

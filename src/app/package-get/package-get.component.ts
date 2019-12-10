import { Component, OnInit, Directive, EventEmitter, Input, Output, QueryList, ViewChildren, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { PackageBean } from '../Model/PackageBean';

import { PackageService } from '../package.service';

import { ActivatedRoute } from '@angular/router';

import { AppComponent } from '../app.component';


import { FormControl } from '@angular/forms';

import { map, startWith } from 'rxjs/operators';

import { Observable } from 'rxjs';



@Component({
  selector: 'app-package-get',
  templateUrl: './package-get.component.html',
  styleUrls: ['./package-get.component.css'],
  providers: [DecimalPipe]

})
export class PackageGetComponent {
  @Input() id: string;
  packages: PackageBean[];

  addedToCart: String;
  selectedPackage: PackageBean;
  isDataAvailable: boolean = false;

  //Filter
  packages$: Observable<PackageBean[]>;
  filter = new FormControl('');

  search(text: string, pipe: PipeTransform): PackageBean[] {
    return this.packages.filter(packageBean => {
      const term = text.toLowerCase();
      console.log(term);
      return packageBean.name.toLowerCase().includes(term)
        || packageBean.id.includes(term)
        || pipe.transform(packageBean.price).includes(term);
    });
  }

  constructor(private packageService: PackageService, private route: ActivatedRoute, private header: AppComponent, private pipe: DecimalPipe) {
    this.packages = this.route.snapshot.data.packages;
    this.packages$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, pipe))
    );

  }

  onSelect(packageBean: PackageBean) {
    this.selectedPackage = packageBean;
  }

  getPackages(): void {
    this.packageService.getPackages().subscribe((data: PackageBean[]) => {
      this.packages = data;
      console.log(data); // Has a value
      console.log(this.packages); // Has a value
    });
  }

  addToCart(packageBean: PackageBean): void {
    console.log(packageBean);
    this.packageService.addToCart(packageBean);
    this.addedToCart = packageBean.id + " added to cart";
    this.header.ngOnInit();
  }

  close() {
    this.addedToCart = null;
  }

}

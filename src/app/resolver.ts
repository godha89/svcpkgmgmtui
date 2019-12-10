import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PackageService } from './package.service';
import { ActivatedRoute, Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { PackageBean } from './Model/PackageBean';
import { catchError } from 'rxjs/internal/operators';



@Injectable()
export class Resolver implements Resolve<Observable<any>>{

  constructor(private api: PackageService) { }


  resolve() {
    return this.api.getPackages().pipe(
            catchError(error => {
                console.error(`Can't resolve product with id because of the error:`);
                console.error(error);
                return of(null);
            }));
  }

}

import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { PackageService } from './package.service';
import { ActivatedRoute, Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { PackageBean } from './Model/PackageBean';
import { catchError } from 'rxjs/internal/operators';


@Injectable()
export class PackageDetailsResolver implements Resolve<Observable<any>> {
  constructor(private api: PackageService,         private router: Router) { }

  resolve( route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot){
			        const id = route.paramMap.get('id');
			console.log("Resolver Id: "+ id);
    return this.api.getPackageDetails(id).pipe(catchError(error => {
                console.error(`Can't resolve product with id because of the error:`);
                console.error(error);
                return of(null);
            }));
  }
}

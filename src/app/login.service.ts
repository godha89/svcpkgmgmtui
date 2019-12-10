import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'https://product-service.herokuapp.com/api/v1/products';

  constructor(private http: HttpClient) { }


  authenticateUser(UserName, Password){


    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(UserName + ':' + Password) });

    const obj ={UserName,Password};
    console.log(obj);
     this.http.get(`${this.uri}`,{ headers })
        .subscribe(res => console.log('Done'));
  }
}

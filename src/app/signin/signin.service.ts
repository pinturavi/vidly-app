import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, RequestMethod} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http:Http) { }

  logIn(userDetails:any){
    return this.http.post('http://localhost:3000/api/auth', userDetails);
  }

  getUserDetails(userDetails:any){
    const headers:Headers=new Headers({'x-auth-token':localStorage.getItem('idToken')});
        return this.http.request(`http://localhost:3000/api/users/me?email=${userDetails.email}`, new RequestOptions({
          'method':RequestMethod.Get,
           'headers':headers
        }));
  }
}

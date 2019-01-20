import { Injectable } from '@angular/core';
import {Http} from '@angular/http/';

const baseURL="http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http:Http) { }

  registerUser(userDetails:any){
   return this.http.post(`${baseURL}/api/users`, userDetails);
  }
}

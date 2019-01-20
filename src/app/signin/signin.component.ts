import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInForm: FormGroup;
  constructor(private signInService: SigninService) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
    })
  }

  onSignIn() {
    this.signInService.logIn(this.signInForm.value).subscribe((response: any) => {
      if(response.ok)
      localStorage.setItem('idToken', response._body);
      console.log(this.isAuthenticated());
    });   
  }

  getUserDetails(){
    this.signInService.getUserDetails(this.signInForm.value).subscribe((response:Response)=>{
      console.log(response);
    });
  }
   
  isAuthenticated(){
    return null !== localStorage.getItem('idToken');
  }
}

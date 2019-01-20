import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Response} from '@angular/http';
import { SignUpService } from './sign-up.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private signUpService:SignUpService) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'name':new FormControl(''),
      'email': new FormControl(''),
      'password': new FormControl('')
    })
  }

  onSignUp() {
    this.signUpService.registerUser(this.signUpForm.value).subscribe((response:Response)=>{
      console.log(response);
    })
  } 
}

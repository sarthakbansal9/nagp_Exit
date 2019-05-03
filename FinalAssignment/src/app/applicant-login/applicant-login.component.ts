import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { NagpServiceService } from "src/app/services/nagp-service.service"; 
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-applicant-login',
  templateUrl: './applicant-login.component.html',
  styleUrls: ['./applicant-login.component.css']
})
export class ApplicantLoginComponent implements OnInit {
   EmailEntered: string;
  passwordEntered: string;

  constructor(private nagpService: NagpServiceService,private router: Router,private sharedService:SharedService) { }
  applicantform : FormGroup
  applicantdetail:any;
  validMessage: string = ""
  ngOnInit() {
    this.applicantform = new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
      }) 
  }
  submitRegistration(){
    if(this.applicantform.valid){
    console.log("Hello");
    this.nagpService.checkApplicant(this.applicantform.value).subscribe(
    data=>{
      this.applicantdetail=data;
      localStorage.setItem('user',JSON.stringify(this.applicantdetail));
      this.sharedService.loginOb=data;
      console.log(data);
    this.applicantform.reset();
    
    if(data == null){
    this.validMessage = "Not Found"
    }
    else{
    this.validMessage = "Found"
    this.router.navigateByUrl('applicanthome')
    }
    return true;
    },
    error=>{
    console.log("error")
    return Observable.throw(error);
    }
    )
    }
    else{
    this.validMessage = "please fill the form"
    }
    } 

}

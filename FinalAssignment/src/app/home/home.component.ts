import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { NagpServiceService } from "src/app/services/nagp-service.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private nagpService: NagpServiceService,private router:Router) { }
  adminform: FormGroup
  adminDetails : any
  validMessage: string = ""
  ngOnInit() {
    this.adminform = new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }
 
  submitRegistration(){
    if(this.adminform.valid){
      console.log("Hello")
      //this.validMessage = " Submitted Successfully"
      this.nagpService.checkAdmin(this.adminform.value).subscribe(
        data=>{
          this.adminDetails=data
          localStorage.setItem('admin',JSON.stringify(this.adminDetails))
          this.adminform.reset();
        if(data == null){
          this.validMessage = "Not Found"
        }
        else{
         // this.validMessage = "Found"
         this.router.navigateByUrl('adminhome')
         
        }
          return true;
        },
        error=>{
          console.log("error")
          return Observable.throw(error);
          
        }
      )
    }
    else{
      this.validMessage = "please fill the form"
    }
  }

}

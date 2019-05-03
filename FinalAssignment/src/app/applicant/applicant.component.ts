import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { NagpServiceService } from "src/app/services/nagp-service.service";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  status1: string[] = [
    'Aspiring',
    'Tagged',
    'Dropped',
 ]
  public level1;
  public batch1;

  applicantform: FormGroup
  validMessage: string = ""
  constructor(private service: NagpServiceService, private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('admin')==null){
      this.router.navigateByUrl('')
      }
    this.applicantform = new FormGroup({
      applicantId:new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      contactNumber: new FormControl('',Validators.required),
      levelId: new FormControl({value: 'level1', disabled: true},Validators.required),
      batchId: new FormControl('',Validators.required),
      nagpStatus: new FormControl({value: 'ASPIRING', disabled: true},Validators.required),
      password: new FormControl('',Validators.required)
    })
    this.getLevel();
    this.getBatch();
    //this.getAAR();
  }
  getLevel(){
    this.service.getLevel().subscribe(
      data=>{ this.level1=data},
      err => console.log(err),
      ()=>console.log("Level Loaded")

    );
  }
  getBatch(){
    this.service.getBatch().subscribe(
      data=>{ this.batch1=data},
      err => console.log(err),
      ()=>console.log("Batch Loaded")

    );
  }
  submitRegistration(){
    if(this.applicantform.valid){
      this.validMessage = " Submitted Successfully"
      var batchid=this.applicantform.controls['batchId'].value;
      var levelid=this.applicantform.controls['levelId'].value;
      var newOb=
      {
          "applicantId": this.applicantform.controls['applicantId'].value,
          "name": this.applicantform.controls['name'].value,
          "email": this.applicantform.controls['email'].value,
          "contactNumber": this.applicantform.controls['contactNumber'].value,
           "batch":{
              "batchId":batchid
           },
          "level":{
            "levelId": 'level1',
           },
           
          
           "nagpStatus":'ASPIRING',
           "password":this.applicantform.controls['password'].value
      }
      this.service.createApplicant(newOb).subscribe(
        data=>{
          this.applicantform.reset();
          return true;
        },
        error=>{
          return Observable.throw(error);
          
        }
      )
    }
    else{
      this.validMessage = "please fill the form"
    }
 }
}

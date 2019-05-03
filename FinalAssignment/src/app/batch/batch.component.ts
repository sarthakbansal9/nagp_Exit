import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { NagpServiceService } from "src/app/services/nagp-service.service";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  constructor(private nagpService: NagpServiceService, private router: Router) { }
  batchform: FormGroup
  validMessage: string = ""
  ngOnInit() {
    if(localStorage.getItem('admin')==null){
      this.router.navigateByUrl('')
      }
    this.batchform = new FormGroup({
      batchId: new FormControl(''),
      year: new FormControl('',Validators.required),
      technology: new FormControl('',Validators.required),
      batchDescription: new FormControl('',Validators.required),
      startDate: new FormControl('',Validators.required)
    })
  }
  submitRegistration(){
     if(this.batchform.valid){
       this.validMessage = " Submitted Successfully"
      // console.log(typeof this.batchform.controls['points'].value === "number")
       this.nagpService.createBatch(this.batchform.value).subscribe(
         data=>{
           this.batchform.reset();
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

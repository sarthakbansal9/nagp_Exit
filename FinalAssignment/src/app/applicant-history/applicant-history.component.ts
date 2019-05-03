import { Component, OnInit, OnChanges } from '@angular/core';
import { NagpServiceService } from '../services/nagp-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-applicant-history',
  templateUrl: './applicant-history.component.html',
  styleUrls: ['./applicant-history.component.css']
})
export class ApplicantHistoryComponent implements OnInit,OnChanges {
 
  public updateStatusForm;
  public applicantId: number;
  public butDisabled:boolean=true;
  public AAR:any
  public currentStatus: string;
  Status: string[] = [
    'IN_PROGRESS',
    'DONE',
 ]
  constructor(private service:NagpServiceService,private router:Router) { }
  
  ngOnInit() {
    if (localStorage.getItem('user') == null) {
      this.router.navigateByUrl('');
    }
    
    this.applicantId = JSON.parse(localStorage.getItem('user')).applicantId;
    this.getData()
    this.updateStatusForm=new FormGroup({
      status: new FormControl('',Validators.required)
    })

  }

  getData(){
    this.service.getActivityRecordByApplicantId(this.applicantId).subscribe((data)=>{
      this.AAR=data;
      
    })

  }
  updateStatus(recordid){
    if(this.updateStatusForm.valid){
      this.currentStatus = this.updateStatusForm.controls['status'].value;
      console.log(recordid+" ******  "+this.currentStatus)
      if(this.currentStatus == "DONE"){
        this.service.updateApplicantActivityStatus(recordid,this.updateStatusForm.value).subscribe((data)=>{
            this.getData();
        })
      }
      else{
        this.service.updateApplicantActivityStatus(recordid,this.updateStatusForm.value).subscribe((data)=>{
            this.getData();
        })
      }
   
  }

 }

 ngOnChanges() {
  
  this.getData();
}
}

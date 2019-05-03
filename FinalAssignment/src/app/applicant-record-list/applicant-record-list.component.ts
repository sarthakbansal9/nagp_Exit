import { Component, OnInit, OnChanges } from '@angular/core';
import { SharedService } from '../shared.service';
import { NagpServiceService } from '../services/nagp-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applicant-record-list',
  templateUrl: './applicant-record-list.component.html',
  styleUrls: ['./applicant-record-list.component.css']
})
export class ApplicantRecordListComponent implements OnInit,OnChanges {
recordForm: FormGroup 
applicantId:number;
applicantData:any;
selectedStatus: string
recordObj:Object
Status:string[]=[
   'COMPLETED',
   'REVIEW_FAILED'
]
  constructor(private sharedService:SharedService,private service:NagpServiceService, private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('admin')==null){
      this.router.navigateByUrl('')
      }
    this.applicantId=this.sharedService.sharedApplicantId;
    console.log(this.applicantId);
    this.getData();
     this.recordForm = new FormGroup({
       status: new FormControl('',Validators.required),
       percentageScore: new FormControl('',Validators.required)
     })
  }

  getData(){

    this.service.getActivityRecordByApplicantId(this.applicantId).subscribe((data)=>{
      this.applicantData=data;
      console.log(data);
    })
  }
 
  

  updateApplicantActivityStatus(recordId){

      this.selectedStatus = this.recordForm.controls['status'].value
      if(this.selectedStatus=='COMPLETED'){
        
         this.service.updateActivityStatus(recordId,this.recordForm.value).subscribe((data)=>{

        })
      }
      else{
            this.recordObj={
              "status": this.selectedStatus,
              "percentageScore":0
            }
            this.service.updateApplicantActivityStatus(recordId,this.recordObj).subscribe((data)=>{

            })

      }
  }
  ngOnChanges() {
    this.getData();
  }

}

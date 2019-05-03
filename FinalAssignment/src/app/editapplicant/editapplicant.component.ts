import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { NagpServiceService } from "src/app/services/nagp-service.service";
@Component({
  selector: 'app-editapplicant',
  templateUrl: './editapplicant.component.html',
  styleUrls: ['./editapplicant.component.css']
})
export class EditapplicantComponent implements OnInit {

  public editapplicant;
  public validateMessage:string=''
  applicantId:number;
  applicantEditform: FormGroup;
  check: boolean = false
  constructor(private service: NagpServiceService,private router:Router) { }

  ngOnInit() {
    if (localStorage.getItem('user') == null) {
      this.router.navigateByUrl('');
    }
    this.applicantId = JSON.parse(localStorage.getItem('user')).applicantId;
    this.getData();
    this.applicantEditform = new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      contactNumber: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }
  getData(){
    
    this.service.getApplicantDetailsById(this.applicantId).subscribe(
      data=>{ this.editapplicant=data
        this.check = true
      },
      err => console.log(err),
      ()=>console.log("Edit-Applicant loaded")

    );
  }
  updateApplicantDetails(){
    this.service.updateApplicantDetailsById(this.applicantId,this.applicantEditform.value).subscribe((data)=>{
      this.validateMessage ='updated scuccessfully';
      this.applicantEditform.reset();
    })
  }

}

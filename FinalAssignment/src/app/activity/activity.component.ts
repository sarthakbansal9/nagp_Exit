import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { NagpServiceService } from "src/app/services/nagp-service.service";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  public level1;
  public batch1;
  activityform: FormGroup
  validMessage: string = ""
  constructor(private service: NagpServiceService, private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('admin')==null){
      this.router.navigateByUrl('')
      }
    this.activityform = new FormGroup({
      activityId:new FormControl(''),
      batchId: new FormControl('',Validators.required),
      levelId: new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      maxAttempts: new FormControl('',Validators.required),
      qualifyPoints: new FormControl('',Validators.required)
    })
    this.getLevel();
    this.getBatch();
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
    if(this.activityform.valid){
      this.validMessage = " Submitted Successfully"
      var batchid=this.activityform.controls['batchId'].value;
      var levelid=this.activityform.controls['levelId'].value;
      var newOb=
      {
          "activityId": this.activityform.controls['activityId'].value,
           "batch":{
              "batchId":batchid
           },
          "level":{
            "levelId": levelid
           },
           "name": this.activityform.controls['name'].value,
           "description": this.activityform.controls['description'].value,
           "maxAttempts":this.activityform.controls['maxAttempts'].value,
           "qualifyPoints":this.activityform.controls['qualifyPoints'].value
      }
      this.service.createActivity(newOb).subscribe(
        data=>{
          this.activityform.reset();
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

import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Observable } from "rxjs";
import { NagpServiceService } from "src/app/services/nagp-service.service";
import { ActivityComponent } from '../activity/activity.component';

@Component({
  selector: 'app-editactivity',
  templateUrl: './editactivity.component.html',
  styleUrls: ['./editactivity.component.css']
})
export class EditactivityComponent implements OnInit {
  public editActivity;

  activityform: FormGroup;
  Updateform:FormGroup;
  
  selectedActivityId:string;
  public ActiviyInfo;
  public BatchInfo;
  public LevelInfo;
  check:boolean=false;
  validMessage:string;
  activityName:string;

  ngOnInit(){
    this.getData();
    this.activityform = new FormGroup({
      activityId: new FormControl('',Validators.required)
    
    })
    this.Updateform=new FormGroup({
      name: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      maxAttempts: new FormControl('',Validators.required),
      qualifyPoints: new FormControl('',Validators.required)

    })
  }
  
  constructor(private service: NagpServiceService){}
  

  getData(){
    console.log('in get data of sleect list')
    this.service.getActivity().subscribe(
      data=>{ this.editActivity=data
      },
      err => console.log(err),
      ()=>console.log("Edit-Activity loaded")

    );
  }

  getActivity(){
    if(this.activityform.valid){
      // console.log(this.levelform.controls['levelId'].value);
      this.selectedActivityId=this.activityform.controls['activityId'].value;
     
      
    this.service.getActivityById(this.selectedActivityId).subscribe(
      data=>{
        this.ActiviyInfo = data;
        console.log(this.ActiviyInfo);
        
        this.check = true;
        console.log(data)
        this.activityform.reset();
        return true;
      },
      error=>{
        return Observable.throw(error);
        
      }
    );
  }
  }

  get(){
    console.log("clicked:- "+this.activityName)
  }
  update(){
    this.validMessage = " updated Successfully"
      var newOb=
      {
           "name": this.Updateform.controls['name'].value,
           "description": this.Updateform.controls['description'].value,
           "maxAttempts":this.Updateform.controls['maxAttempts'].value,
           "qualifyPoints":this.Updateform.controls['qualifyPoints'].value
      }
    this.service.updateActivity(newOb,this.selectedActivityId).subscribe(data=>{
      console.log('updated scuccessfully');
      this.Updateform.reset();
      this.getData();
    })
  }

}

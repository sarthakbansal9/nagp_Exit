import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Observable } from "rxjs";
import { NagpServiceService } from "src/app/services/nagp-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-level',
  templateUrl: './edit-level.component.html',
  styleUrls: ['./edit-level.component.css']
})
export class EditLevelComponent implements OnInit {
  public editLevel;
  public levelInfo; 
  public validateMessage:string=''
  idd:number;
  check:boolean = false
  selectedLevelId:string
  constructor(private service: NagpServiceService, private router:Router) { }
  levelform: FormGroup
  updateform:FormGroup
  ngOnInit() {
    if(localStorage.getItem('admin')==null){
      this.router.navigateByUrl('')
      }
    this.getData();
    this.levelform = new FormGroup({
      levelId: new FormControl('',Validators.required)
    })

    this.updateform=new FormGroup({
      levelName: new FormControl('',Validators.required),
      levelDesc: new FormControl('',Validators.required),
      qualifyPoints: new FormControl('',Validators.required)
    })
  }
  getData(){
    console.log('in get data of sleect list')
    this.service.getLevel().subscribe(
      data=>{ this.editLevel=data
      },
      err => console.log(err),
      ()=>console.log("Edit-Level loaded")

    );
  }
  getLevel(){
    if(this.levelform.valid){
      // console.log(this.levelform.controls['levelId'].value);
      this.selectedLevelId=this.levelform.controls['levelId'].value;
     
      
    this.service.getLevelById(this.selectedLevelId).subscribe(
      data=>{
        this.levelInfo = data;
        console.log(this.levelInfo);
        
        this.check = true;
        console.log(data)
        this.levelform.reset();
        return true;
      },
      error=>{
        return Observable.throw(error);
        
      }
    );
  }
}

update(){
  this.service.updateLevel(this.updateform.value,this.selectedLevelId).subscribe(data=>{
    this.validateMessage ='updated scuccessfully';
    this.updateform.reset();
    this.getData();
  })
}

}

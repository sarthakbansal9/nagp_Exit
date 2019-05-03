import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Observable } from "rxjs";
import { NagpServiceService } from "src/app/services/nagp-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-editbatch',
  templateUrl: './editbatch.component.html',
  styleUrls: ['./editbatch.component.css']
})
export class EditbatchComponent implements OnInit {
  public editBatch;
  public batchInfo;
  space:string= " ";
  selectBatchId:string;
  check:boolean = false
  constructor(private service: NagpServiceService, private router:Router) { }
  batchform: FormGroup;
  updateform: FormGroup
  ngOnInit() {
    if(localStorage.getItem('admin')==null){
      this.router.navigateByUrl('')
      }
    this.getData();
    this.batchform = new FormGroup({
      batchId: new FormControl('',Validators.required)
    })
    this.updateform=new FormGroup({
      technology: new FormControl('',Validators.required),
      batchDescription: new FormControl('',Validators.required),
      year: new FormControl('',Validators.required)
    })
  }

  //for drop down
  getData(){
    this.service.getBatch().subscribe(
      data=>{ this.editBatch=data
      },
      err => console.log(err),
      ()=>console.log("Edit-Batch loaded")

    );
  }
  //for all batch information
  getBatch(){
    if(this.batchform.valid){
      this.selectBatchId=this.batchform.controls['batchId'].value
    this.service.getBatchById(this.selectBatchId).subscribe(
      data=>{
        this.batchInfo = data;
  
        this.check = true;
        console.log(data)
        this.batchform.reset();
        return true;
      },
      error=>{
        return Observable.throw(error);
        
      }
    );
  }
}

update(){
  this.service.updateBatch(this.updateform.value,this.selectBatchId).subscribe(data=>{
    console.log('updated scuccessfully');
    this.updateform.reset();
    this.getData();
  })
}

}

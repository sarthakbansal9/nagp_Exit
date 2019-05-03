import { Component, OnInit } from '@angular/core';
import { NagpServiceService } from '../services/nagp-service.service';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-applicant-activities',
  templateUrl: './applicant-activities.component.html',
  styleUrls: ['./applicant-activities.component.css'],
  providers: [DatePipe]
})
export class ApplicantActivitiesComponent implements OnInit {
  public myDate: any = new Date();
  public activity;
  public email: string;
  public password: string;
  public loggedInObject: any;
  public levelId: string;
  public batchId: string;
  public applicantId: number;
  public enabled: boolean;
  public checkStatusreturned
  dataFetched: string
  constructor(private service: NagpServiceService, private datepipe: DatePipe,
    private sharedService: SharedService, private router: Router) {
    this.myDate = this.datepipe.transform(this.myDate, 'dd-MM-yyyy');
    console.log(this.myDate);

  }

  ngOnInit() {
    console.log('hey there ');
    //this.loggedInObject=this.sharedService.loginOb;
    if (localStorage.getItem('user') == null) {
      this.router.navigateByUrl('');
    }
    this.levelId = JSON.parse(localStorage.getItem('user')).level.levelId;
    this.batchId = JSON.parse(localStorage.getItem('user')).batch.batchId;
    this.applicantId = JSON.parse(localStorage.getItem('user')).applicantId;
    this.getData()

  }

  getData() {
    //console.log('sahred ob is ',this.loggedInObject);

    this.service.getActivitiesByBatchAndLevel(this.levelId, this.batchId).subscribe(
      data => {
        this.activity = data
        console.log(data)
      },
      err => console.log(err),
      () => console.log("Activity loaded")

    );
  }
  checkActivityAvailability(actId) {
    console.log('activity id clikced is ****** '+actId);
    
    this.service.checkActivityByapplicantIdAndActivityId(this.applicantId, actId).subscribe((data) => {
      console.log(data)
      if (data == "true") {
        //plus is enabled
        //add the activity record to AAR table
        alert('activity record is added');
        //create the aar record object
        

        var newOb =
        {
          "status": "PLANNED",
          "percentageScore": 0,
          "pointsEarned": 0,
          "startDate": this.myDate,
          "doneDate": "",
          "count":1,
          "completionDate": "",
          "applicantDetails": {
            "applicantId": this.applicantId
          },
          "activity": {
            //button-id
            "activityId": actId
          },
          "level": {
            "levelId": this.activity[0].level.levelId
          },
          "description": "Started the activity",
          "document": "adfsef"
        }

        this.service.saveActivityRecord(newOb).subscribe((data) => {
          console.log('Record Saved'); 
        })
      }
      else {
        //check the conditions
        if(data == 'PENDING'){
          alert("Activity Is to be reviewed");
        }
        if(data == "COMPLETED"){
          alert("You already perforemd this activity")
        }

        if(data == "false"){
          alert('you excedded maximum attempts')
        }

       
      
        
      }



    })
  }

}

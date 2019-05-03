import { Injectable ,EventEmitter} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class NagpServiceService {
    inputClickedEvent= new EventEmitter<{data:string}>() 
    inputClickedEvent1= new EventEmitter<{data:string}>() 
    datafetched:any;
    constructor(private http: HttpClient) {
  
   }
   //Admin
   checkAdmin(adminData){
     
      let body = JSON.stringify(adminData);
      console.log("Hello 1");
      console.log(body);
      return this.http.post('server/admin-login',body,httpOptions) 
   }

   getAdmin(){
     return this.http.get('server/api/admin')
   }
   createAdmin(ad){
     let body = JSON.stringify(ad)
     return this.http.post('server/api/admin',body,httpOptions)
   }

   //Level
   createLevel(level){
    let body = JSON.stringify(level)
    return this.http.post('server/addLevel',body,httpOptions)
   }

   getLevel(){
     return this.http.get('server/levels')
   }
   getLevelById(levelid){
    console.log("level id is ",levelid);
     return this.http.get('server/level/'+levelid)
   }

   updateLevel(updatedBody,levelid){
      let body = JSON.stringify(updatedBody)
      console.log(body );
      console.log(levelid);
      return this.http.put('server/level/'+levelid,body,httpOptions);
   }

   //Batch
   createBatch(batch){
    let body = JSON.stringify(batch)
    console.log(body);
    
    return this.http.post('server/addBatch',body,httpOptions)
   }
   getBatch(){
    return this.http.get('server/batches')
  }

  getBatchById(batchid){
     return this.http.get('server/batch/'+batchid)
   }

   updateBatch(updatedBody,batchid){
    let body = JSON.stringify(updatedBody)
    console.log(body );
    console.log(batchid);
    return this.http.put('server/batch/'+batchid,body,httpOptions);
   }

  //Activity
  createActivity(ad){
    let body = JSON.stringify(ad)
    console.log(body)
    return this.http.post('server/addActivity',body,httpOptions)
  }
  getActivity(){
    return this.http.get('server/allActivities')
  }

  getActivityById(activityId){
    return this.http.get('server/activity/'+activityId)
  }

  updateActivity(updatedBody,activityid){
    let body = JSON.stringify(updatedBody)
    console.log(body );
    console.log(activityid);
    return this.http.put('server/activity/'+activityid,body,httpOptions);
  }



  getActivitiesByBatchAndLevel(levelId,batchId){
    // console.log('logged  object is '+loggeInOb);
    // console.log(loggeInOb.level.levelId);
    // console.log(loggeInOb.batch.batchId);
    return this.http.get('server/ApplicantActivities?level_id='+levelId+'&batch_id='+batchId)

  }

  getScoreByApplicantId(applicantId):Observable<number>{
    console.log('in service');
    return this.http.get<number>('server/applicantScore/'+applicantId)
  }


  //Applicant
  createApplicant(ad){
    let body = JSON.stringify(ad)
    console.log(body);
    return this.http.post('server/addApplicant',body,httpOptions)
  }
  getApplicant(){
    return this.http.get('server/applicantList')
  }

  getApplicantDetailsById(applicantId){
    return this.http.get('server/applicantList/'+applicantId);
  }

  updateApplicantDetailsById(applicantId,applicantDetails){
    let body = JSON.stringify(applicantDetails)
    return this.http.put('/server/updateProfile/'+applicantId,body,httpOptions)
  }

  checkApplicant(applicant){
    let body = JSON.stringify(applicant);
    console.log("Hello 1");
    return  this.http.post('server/applicant-login',body,httpOptions) 

    } 

    checkActivityByapplicantIdAndActivityId(applicantid,activityid){
      console.log('applicant Id '+applicantid);
      console.log('activity ID'+activityid); 
      return this.http.get('server/activitycheck?activity_id='+activityid+'&applicant_id='+applicantid, {responseType:'text'}) 
    }

    saveActivityRecord(activityRecord){
        console.log(activityRecord);
        return  this.http.post('server/addApplicantActivity',activityRecord,httpOptions);
    }

    getActivityRecordByApplicantId(applicantid){
      return this.http.get('/server/applicantHistory/'+applicantid);
    }

    updateApplicantActivityStatus(recordId,currentStatus){
      console.log("record id is "+recordId+"  status is ",currentStatus);
      let body=JSON.stringify(currentStatus);
      console.log(body);
      return this.http.put('/server/updateRecord/'+recordId,body,httpOptions)
    }
    updateActivityStatus(recordId, obj)
    {
      
      let body=JSON.stringify(obj);
      console.log(body);
      return this.http.put('/server/updateActivityStatus/'+recordId,body,httpOptions)
    }

}

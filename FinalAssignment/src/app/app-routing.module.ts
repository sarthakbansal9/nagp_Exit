import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from "src/app/admin/admin.component";
import { HomeComponent } from "src/app/home/home.component";
import { LevelComponent } from "src/app/level/level.component";
import { BatchComponent } from "src/app/batch/batch.component";
import { AdminHomeComponent } from "src/app/admin-home/admin-home.component";
import { ActivityComponent } from "src/app/activity/activity.component";
import { ApplicantComponent } from "src/app/applicant/applicant.component";
import { EditLevelComponent } from "src/app/edit-level/edit-level.component";
import { ViewlevelComponent } from "src/app/viewlevel/viewlevel.component";
import { ViewbatchComponent } from "src/app/viewbatch/viewbatch.component";
import { ViewapplicantComponent } from "src/app/viewapplicant/viewapplicant.component";
import { ViewactivityComponent } from "src/app/viewactivity/viewactivity.component";
import { EditbatchComponent } from "src/app/editbatch/editbatch.component";
import { EditapplicantComponent } from "src/app/editapplicant/editapplicant.component";
import { EditactivityComponent } from './editactivity/editactivity.component';
import { ApplicantHomeComponent } from './applicant-home/applicant-home.component';
import { ApplicantLoginComponent } from './applicant-login/applicant-login.component';
import { StartComponent } from './start/start.component';
import { ApplicantActivitiesComponent } from './applicant-activities/applicant-activities.component';
import { ApplicantHistoryComponent } from './applicant-history/applicant-history.component';
import { LogoutComponent } from './logout/logout.component';
import { PerformActivityComponent } from './perform-activity/perform-activity.component';
import { ApplicantRecordListComponent } from './applicant-record-list/applicant-record-list.component';
import { AhomeComponent } from './ahome/ahome.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'adminhome/viewapplicant',
    component: ViewapplicantComponent
  },
 
  {
    path: 'adminhome/viewactivity',
    component: ViewactivityComponent
  },
  {
    path: 'adminhome/viewlevel',
    component: ViewlevelComponent
  },
  {
    path: 'adminhome/viewbatch',
    component: ViewbatchComponent
  },
  {
    path: "adminhome/applicant",
    component: ApplicantComponent
  },
  {
    path: "adminhome/applicantRecordList",
    component: ApplicantRecordListComponent
  },
  {
    path: "adminhome/activity",
    component: ActivityComponent
  },
  {
     path:"adminhome/ahome",
     component: AdminHomeComponent
  },
  {
    path:"adminhome",
    component: AhomeComponent
 },
  {
     path: "adminlogin",
     component: HomeComponent
  },
  {
    path: "applicantlogin",
    component: ApplicantLoginComponent
 },
 {
  path: "performActivity",
  component: PerformActivityComponent
},
 {
  path: "logout",
  component: LogoutComponent
},
{
  path: "adminlogout",
  component: AdminLogoutComponent
},
  {
    path: "applicanthome/applicantactivities",
    component: ApplicantActivitiesComponent
 },
 {
  path: "applicanthome/applicanthistory",
  component: ApplicantHistoryComponent
},
{
  path: 'applicanthome/editapplicant',
  component: EditapplicantComponent
},
{
  path: "applicanthome",
  component: ApplicantHomeComponent
},
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'adminhome/level',
    component: LevelComponent
  },
  
  {
    path: 'adminhome/batch',
    component: BatchComponent
  },
  {
    path: 'adminhome/editlevel',
    component: EditLevelComponent
  },
  {
    path: 'adminhome/editbatch',
    component: EditbatchComponent
  },
  
  {
    path: 'adminhome/editactivity',
    component: EditactivityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

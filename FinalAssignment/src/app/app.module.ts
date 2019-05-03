import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NagpServiceService } from "src/app/services/nagp-service.service";
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LevelComponent } from './level/level.component';
import { BatchComponent } from './batch/batch.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ActivityComponent } from './activity/activity.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { EditLevelComponent } from './edit-level/edit-level.component';
import { ViewlevelComponent } from './viewlevel/viewlevel.component';
import { ViewbatchComponent } from './viewbatch/viewbatch.component';
import { ViewapplicantComponent } from './viewapplicant/viewapplicant.component';
import { ViewactivityComponent } from './viewactivity/viewactivity.component';
import { EditbatchComponent } from './editbatch/editbatch.component';
import { EditapplicantComponent } from './editapplicant/editapplicant.component';
import { EditactivityComponent } from './editactivity/editactivity.component';
import { StartComponent } from './start/start.component';
import { ApplicantLoginComponent } from './applicant-login/applicant-login.component';
import { ApplicantHomeComponent } from './applicant-home/applicant-home.component';
import { ApplicantActivitiesComponent } from './applicant-activities/applicant-activities.component';
import { ApplicantHistoryComponent } from './applicant-history/applicant-history.component';
import { LogoutComponent } from './logout/logout.component';
import { PerformActivityComponent } from './perform-activity/perform-activity.component';
import { ApplicantRecordListComponent } from './applicant-record-list/applicant-record-list.component';
import { AhomeComponent } from './ahome/ahome.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    LevelComponent,
    BatchComponent,
    AdminHomeComponent,
    ActivityComponent,
    ApplicantComponent,
    EditLevelComponent,
    ViewlevelComponent,
    ViewbatchComponent,
    ViewapplicantComponent,
    ViewactivityComponent,
    EditbatchComponent,
    EditapplicantComponent,
    EditactivityComponent,
    StartComponent,
    ApplicantLoginComponent,
    ApplicantHomeComponent,
    ApplicantActivitiesComponent,
    ApplicantHistoryComponent,
    LogoutComponent,
    PerformActivityComponent,
    ApplicantRecordListComponent,
    AhomeComponent,
    AdminLogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NagpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-applicant-home',
  templateUrl: './applicant-home.component.html',
  styleUrls: ['./applicant-home.component.css']
})
export class ApplicantHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('user')==null){
      this.router.navigateByUrl('')
    }
  }

}

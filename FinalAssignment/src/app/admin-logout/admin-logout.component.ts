import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router'
import { log } from 'util';

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrls: ['./admin-logout.component.css']
})
export class AdminLogoutComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
    console.log("in logout")
    localStorage.removeItem('admin');
    this.router.navigateByUrl('')
  }

}

import { Component, OnInit } from '@angular/core';
import { NagpServiceService } from "src/app/services/nagp-service.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public admin;
  constructor(private service: NagpServiceService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.service.getAdmin().subscribe(
      data=>{ this.admin=data},
      err => console.log(err),
      ()=>console.log("Admin loaded")

    );
  }

}

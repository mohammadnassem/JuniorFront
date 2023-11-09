import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../services/shared.service";
import {DatePipe} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile=new  User();
  constructor( private authService: UserService, public sharedService:SharedService,public datePipe: DatePipe,
               private route: ActivatedRoute) {

  }



  ngOnInit() {
    this.profile = this.authService.currentUserValue;
    console.log( this.profile);
  }




}


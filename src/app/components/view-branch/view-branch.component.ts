import { Component, OnInit } from '@angular/core';
import {BranchService} from "../../services/branch.service";
import {Branches} from "../../models/branches";
import {DatePipe} from "@angular/common";
import {BookService} from "../../services/book.service";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-view-branch',
  templateUrl: './view-branch.component.html',
  styleUrls: ['./view-branch.component.css']
})
export class ViewBranchComponent implements OnInit {
  branches :Branches[];
  totalLength:any;
  page:number=1;

  constructor(private branchService:BranchService,public datePipe: DatePipe,public sharedService:SharedService) { }

  ngOnInit(): void {
    this.branchService.getAllBranch().subscribe(value => {
      this.branches= value['branches'];
      this.totalLength = this.branches.length;

    });
  }

}

import { Component, OnInit } from '@angular/core';
import {Branches} from "../../models/branches";
import {BranchService} from "../../services/branch.service";
import {DatePipe} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {BranchBook} from "../../models/branch-book";
import {BookService} from "../../services/book.service";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-branch-detal',
  templateUrl: './branch-detal.component.html',
  styleUrls: ['./branch-detal.component.css']
})
export class BranchDetalComponent implements OnInit {

  branches :Branches;
  branchBook:BranchBook[];

  constructor(private branchService:BranchService,public datePipe: DatePipe,private route: ActivatedRoute,public sharedService:SharedService) {
 this.branches = new  Branches();
  }


  ngOnInit(): void {
    this.branchService.getBooksByBranch(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe((value :BranchBook[] )=> {
      this.branchBook=value['books'];
       this.branchService.getBranch(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(value1 => {
       this.branches= value1['branches'];
       });



    });
  }

}

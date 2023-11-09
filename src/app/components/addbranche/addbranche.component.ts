import { Component, OnInit } from '@angular/core';
import {Author} from "../../models/author";
import {AuthorService} from "../../services/author.service";
import {AlertService} from "../../services/alert.service";
import {Branches} from "../../models/branches";
import {BranchService} from "../../services/branch.service";

@Component({
  selector: 'app-addbranche',
  templateUrl: './addbranche.component.html',
  styleUrls: ['./addbranche.component.css']
})
export class AddbrancheComponent implements OnInit {
  branche: Branches;

  constructor(private branchService: BranchService,private alertService: AlertService) {
    this.branche = new Branches();
  }

  ngOnInit(): void {

  }

  addBranche(branche:Branches){
    this.alertService.clear();
    this.branchService.addBranch(branche).subscribe(value => {
        alert(value['msg']);
        window.location.reload();
      },
      error => {
        this.alertService.error("لايمكن اضافه فرع ");

      });
  }

}

import { Component, OnInit } from '@angular/core';
import {AuthorService} from "../../services/author.service";
import {Author} from "../../models/author";
import {ActivatedRoute} from "@angular/router";
import {DatePipe} from "@angular/common";
import {SharedService} from "../../services/shared.service";
import {CategoryService} from "../../services/category.service";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-view-authers',
  templateUrl: './view-authers.component.html',
  styleUrls: ['./view-authers.component.css']
})
export class ViewAuthersComponent implements OnInit {
    authors:Author[];
  constructor(private authorService: AuthorService,public datePipe: DatePipe, public sharedService: SharedService,private alertService: AlertService) { }

  ngOnInit(): void {

    this.authorService.getAllAuthors().subscribe(value => {
      this.authors=value['authors'];
      console.log(value)
    })
  }

  delete(id:number){
    this.alertService.clear();
    this.authorService.deleteAuthor(id).subscribe(value => {

        alert(value['msg']);
        window.location.reload();
      },
      error => {
        this.alertService.error("لايمكن حذف الكاتب ");

      });
  }

}

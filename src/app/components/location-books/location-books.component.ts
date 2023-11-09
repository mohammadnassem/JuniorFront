import { Component, OnInit } from '@angular/core';
import {BranchService} from "../../services/branch.service";
import {AllBookLocation} from "../../models/all-book-location";
import {BookService} from "../../services/book.service";
import {SharedService} from "../../services/shared.service";
import {BranchBook} from "../../models/branch-book";

@Component({
  selector: 'app-location-books',
  templateUrl: './location-books.component.html',
  styleUrls: ['./location-books.component.css']
})
export class LocationBooksComponent implements OnInit {
  allBookLocation:AllBookLocation[];
  books:Array<BranchBook> = [];
  totalLength:any;
  page:number=1;
  constructor(private branchService:BranchService,public sharedService:SharedService) { }

  ngOnInit(): void {
    this.branchService.getLocationallBook().subscribe(value => {
      this.allBookLocation=value['branch'];

      for (var i = 0, len = this.allBookLocation.length; i < len; i++) {
        for (var j = 0, lenn = this.allBookLocation[i].books.length; j < lenn; j++) {
          this.allBookLocation[i].books[j].branch_name=this.allBookLocation[i].name;
          this.books.push((this.allBookLocation[i].books[j] ));

        }
      }


      this.totalLength = this.books.length;

    });

  }

}

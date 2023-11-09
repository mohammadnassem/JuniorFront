import { Component, OnInit } from '@angular/core';
import {Branches} from "../../models/branches";
import {BranchBook} from "../../models/branch-book";
import {BranchService} from "../../services/branch.service";
import {DatePipe} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {SharedService} from "../../services/shared.service";
import {Pivot} from "../../models/pivot";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../../services/book.service";
import {Book} from "../../models/book";

@Component({
  selector: 'app-book-branche',
  templateUrl: './book-branche.component.html',
  styleUrls: ['./book-branche.component.css']
})
export class BookBrancheComponent implements OnInit {
  loginForm: FormGroup;
  branches :Branches[];
  Piv:Pivot;
  id:number=0;
  book:Book;

  constructor(private bookService:BookService,private formBuilder: FormBuilder,private branchService:BranchService,public datePipe: DatePipe,private route: ActivatedRoute,public sharedService:SharedService) {
this.Piv = new  Pivot();
this.book=new Book();
    this.bookService.getbookbytitle(this.route.snapshot.paramMap.get('title')).subscribe(value => {
this.book=value['book'];
    })


  }


  ngOnInit(): void {
    this.branchService.getAllBranch().subscribe((value :BranchBook[] )=> {
      this.branches=value['branches'];
    });


  }
  addbook(Piv:Pivot){

    Piv.book_id=this.book.id;

    this.branchService.addBooktobranche(Piv).subscribe(value => {
      window.location.reload();

    });
  }

}

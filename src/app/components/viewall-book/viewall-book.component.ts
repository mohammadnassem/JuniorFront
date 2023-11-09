import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";
import {Book} from "../../models/book";
import {BranchBook} from "../../models/branch-book";
import {SharedService} from "../../services/shared.service";
import {CategoryService} from "../../services/category.service";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-viewall-book',
  templateUrl: './viewall-book.component.html',
  styleUrls: ['./viewall-book.component.css']
})
export class ViewallBookComponent implements OnInit {
  books: Book[];
  totalLength:any;
  page:number=1;

  // serchValue:string;

  constructor(private bookService: BookService,public sharedService:SharedService,private alertService: AlertService) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((value :Book[] ) => {
      this.books = value['books'];
      this.totalLength = this.books.length;
      console.log(value);

    });

  }

  delete(id:number){
    this.alertService.clear();
    this.bookService.deleteBook(id).subscribe(value => {
        alert(value['msg']);
        window.location.reload();
      },
      error => {
        this.alertService.error("لايمكن حذف الكتاب");

      });
  }



}

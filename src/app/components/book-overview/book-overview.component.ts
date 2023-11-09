import {Component, OnInit} from '@angular/core';
import {Book} from "../../models/book";
import {User} from "../../models/user";
import {MyfavoriteService} from "../../services/myfavorite.service";
import {UserService} from "../../services/user.service";
import {SharedService} from "../../services/shared.service";
import {BookService} from "../../services/book.service";


@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.css']
})
export class BookOverviewComponent implements OnInit {
  books: Book[];
  fav: Book[];
  recomend: Book[];
  totalLength:any;
  page:number=1;


  constructor(private authService: UserService, private myfavorteService: MyfavoriteService, private bookService: BookService, public sharedService: SharedService,) {

  }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(value => {
      this.books = value ['books'];
      this.totalLength = this.books.length;
      this.changetofalse(this.books);
      // @ts-ignore
      this.myfavorteService.favorteproducts(this.authService.currentUserValue?.id).subscribe(res => {
        this.fav = res ['books'];
        this.changeFavo(this.fav, this.books);

      });

    });


    this.bookService.getBookRec(this.authService.currentUserValue?.id).subscribe(value => {
      this.recomend = value['books'];

    });

  }

  changetofalse(book: Book[]) {
    book.forEach(function (val) {

      val.isfavorite = false;
    });
  }

  changeFavo(favo: Book[], book: Book[]) {
    book.forEach(function (val) {

      val.isfavorite = false;
    });

    book.forEach(function (value) {
      favo.forEach(function (val) {
        if (value.id == val.id) {

          value.isfavorite = true;
        }


      });
    });
    this.books = book;

  }


  toggleicon(book: Book, i) {

    if (book.isfavorite) {
      document.getElementById(i.toString()).className = "fa fa-thumbs-down";

      // @ts-ignore
      this.myfavorteService.deleteFavorte({
        user_id: this.authService.currentUserValue?.id,
        book_id: book.id
      }).subscribe(value1 => {
        window.location.reload();
      });
    } else {
      this.bookService.getRecomend({user_id:this.authService.currentUserValue?.id,title:book?.title}).subscribe(value => {

      });
      console.log("fa");
      document.getElementById(i.toString()).className = "fa fa-thumbs-up";
      // @ts-ignore
      this.myfavorteService.addtofavorte({
        user_id: this.authService.currentUserValue?.id,
        book_id: book?.id
      }).subscribe(res => {
        window.location.reload();
      })
    }
  }
}


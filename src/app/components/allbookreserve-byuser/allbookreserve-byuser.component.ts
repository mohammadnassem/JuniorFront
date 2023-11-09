import {Component, OnInit} from '@angular/core';
import {Book} from "../../models/book";
import {User} from "../../models/user";
import {BookUser} from "../../models/book-user";
import {UserService} from "../../services/user.service";
import {MyfavoriteService} from "../../services/myfavorite.service";
import {BookService} from "../../services/book.service";
import {SharedService} from "../../services/shared.service";
import {ActivatedRoute} from "@angular/router";
import {ReservationService} from "../../services/reservation.service";

@Component({
  selector: 'app-allbookreserve-byuser',
  templateUrl: './allbookreserve-byuser.component.html',
  styleUrls: ['./allbookreserve-byuser.component.css']
})
export class AllbookreserveByuserComponent implements OnInit {

  books: Book[];
  fav: Book[];
  bookUser: BookUser;

  constructor(private authService: UserService, private myfavorteService: MyfavoriteService,
              private bookService: BookService, public sharedService: SharedService,
              private reservationService: ReservationService, private route: ActivatedRoute) {

    this.bookUser = new BookUser();
  }

  ngOnInit(): void {


    this.reservationService.getAllBooksReservationByUser(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(value => {
      this.books = value ['books'];
      this.changetofalse(this.books);
      // @ts-ignore
      this.myfavorteService.favorteproducts(resUser['user'].id).subscribe(res => {
        this.fav = res ['books'];
        this.changeFavo(this.fav, this.books);

      });

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
      console.log("fa");
      document.getElementById(i.toString()).className = "fa fa-thumbs-up";
      // @ts-ignore
      this.myfavorteService.addtofavorte({
        user_id: this.authService.currentUserValue?.id,
        book_id: book.id
      }).subscribe(res => {
        window.location.reload();
      })
    }
  }

  deletreserv(book: Book) {
    this.bookUser.user_id = this.authService.currentUserValue?.id;
    this.bookUser.book_id = book?.id;
    this.reservationService.DeleteReservation(this.bookUser).subscribe(value => {
      console.log(value);
      window.location.reload();
    });
  }

}

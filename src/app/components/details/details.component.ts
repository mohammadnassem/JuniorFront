import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {MyfavoriteService} from "../../services/myfavorite.service";
import {BookService} from "../../services/book.service";
import {SharedService} from "../../services/shared.service";
import {Book} from "../../models/book";
import {ActivatedRoute} from "@angular/router";
import {PublisherService} from "../../services/publisher.service";
import {Publisher} from "../../models/publisher";
import {AuthorService} from "../../services/author.service";
import {Author} from "../../models/author";
import {ReservationService} from "../../services/reservation.service";
import {BookUser} from "../../models/book-user";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  book: Book;
  fav: Book[];
  publisher: Publisher;
  authors:Author[];
  bookUser : BookUser;
  flag:boolean =false;
  category:Category;

  constructor(private authService: UserService, private myfavorteService: MyfavoriteService, private bookService: BookService, public sharedService: SharedService,
              private route: ActivatedRoute, private publisherService: PublisherService, private authorService: AuthorService ,
              private reservationService:ReservationService,private categoryService:CategoryService,   private alertService: AlertService) {
    this.book = new Book();
    this.publisher = new Publisher();
    this.bookUser = new BookUser();


  }

  ngOnInit(): void {


    this.bookService.getBook(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(value => {
      this.book = value['book'];
      this.categoryService.getCategoryByBookId(this.book?.id).subscribe(val => {
      this.category =val['category'];
      this.publisherService.getPublisher(this.book.publisher_id).subscribe(value1 => {
        this.publisher = value1['publisher'];
        this.authorService.getAuthorByBook(this.book.id).subscribe(res => {
          this.authors = res['authors'];
        });

      });
    });
    });
    if(this.authService.currentUserValue?.account_type == 'user'){
      this.flag = true;
    }



  }

  reservBook(book:Book){
    this.alertService.clear();
    this.bookUser.book_id = book?.id;
    this.bookUser.user_id = this.authService.currentUserValue?.id;
    console.log(this.bookUser);
    this.reservationService.addReservation(this.bookUser).subscribe(value => {

      if(value['status']==true){
        this.alertService.success('تم حجز الكتاب بشكل صحيح', true);
        window.location.reload();
      }else{
        this.alertService.error("لم يتم حجز الكتاب");
      }

    });

  }

}

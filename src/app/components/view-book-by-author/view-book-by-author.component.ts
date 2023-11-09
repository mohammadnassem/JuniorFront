import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/book";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {MyfavoriteService} from "../../services/myfavorite.service";
import {BookService} from "../../services/book.service";
import {SharedService} from "../../services/shared.service";
import {PublisherService} from "../../services/publisher.service";
import {ActivatedRoute} from "@angular/router";
import {AuthorService} from "../../services/author.service";

@Component({
  selector: 'app-view-book-by-author',
  templateUrl: './view-book-by-author.component.html',
  styleUrls: ['./view-book-by-author.component.css']
})
export class ViewBookByAuthorComponent implements OnInit {

  books: Book[];
  fav: Book[];
  profile: User;

  constructor(private authService: UserService, private myfavorteService: MyfavoriteService,
              private bookService: BookService, public sharedService: SharedService,
              private authorService: AuthorService,private route: ActivatedRoute) {


  }

  ngOnInit(): void {



    this.authorService.getAuthorWithBooks(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(value => {
      this.books = value ['author']['books'];
      this.authService.getUserProfile().subscribe(resUser => {
        this.profile=resUser['user'];
        // @ts-ignore
        this.myfavorteService.favorteproducts(resUser['user'].id).subscribe(res => {
          this.fav = res ['books'];

          this.changeFavo(this.fav,this.books);
        });
      });

    });

  }
  changeFavo(favo:Book[],book:Book[]){
    book.forEach(function (val) {

      val.isfavorite=false;
    });

    book.forEach(function (value) {
      favo.forEach(function (val) {
        if(value.id == val.id){

          value.isfavorite=true;
        }


      });
    });
    this.books =book;

  }


  toggleicon(book:Book,i){

    if(book.isfavorite){
      document.getElementById(i.toString()).className="fa fa-thumbs-down";

      // @ts-ignore
      this.myfavorteService.deleteFavorte({user_id:this.profile.id , book_id:book.id}).subscribe(value1 => {
        window.location.reload();
      });
    }else {
      console.log("fa");
      document.getElementById(i.toString()).className="fa fa-thumbs-up";
      // @ts-ignore
      this.myfavorteService.addtofavorte({user_id:this.profile.id , book_id:book.id}).subscribe(res=>{
        window.location.reload();
      })
    }
  }
}

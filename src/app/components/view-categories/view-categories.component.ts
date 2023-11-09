import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {ActivatedRoute} from "@angular/router";
import {Book} from "../../models/book";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {MyfavoriteService} from "../../services/myfavorite.service";
import {BookService} from "../../services/book.service";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
  category:Category;
  books: Book[];
  fav: Book[];
  profile: User;

  constructor(private authService: UserService, private myfavorteService: MyfavoriteService, private bookService: BookService, public sharedService: SharedService,private categoryService: CategoryService,private route: ActivatedRoute) {


  }

  ngOnInit(): void {



    this.categoryService.getBooksByCategory(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(value => {
      this.books = value ['books'];
      this.changetofalse(this.books);


        this.myfavorteService.favorteproducts(this.authService.currentUserValue?.id).subscribe(res => {
          this.fav = res ['books'];
          this.changeFavo(this.fav,this.books);

        });


    });

  }

  changetofalse(book:Book[]){
    book.forEach(function (val) {

      val.isfavorite=false;
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
      this.myfavorteService.deleteFavorte({user_id:this.authService.currentUserValue?.id, book_id:book.id}).subscribe(value1 => {
        window.location.reload();
      });
    }else {
      this.bookService.getRecomend({user_id:this.authService.currentUserValue?.id,title:book?.title}).subscribe(value => {

      });
      console.log("fa");
      document.getElementById(i.toString()).className="fa fa-thumbs-up";
      // @ts-ignore
      this.myfavorteService.addtofavorte({user_id:this.authService.currentUserValue?.id , book_id:book.id}).subscribe(res=>{
        window.location.reload();
      })
    }
  }
}



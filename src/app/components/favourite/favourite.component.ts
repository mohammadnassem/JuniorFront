import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/book";
import {User} from "../../models/user";
import {MyfavoriteService} from "../../services/myfavorite.service";
import {UserService} from "../../services/user.service";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  books: Book[] ;
  profile: User;

  constructor(private myfavorteService:MyfavoriteService, private authService: UserService,public sharedService:SharedService) {



  }

  ngOnInit(): void {


      this.myfavorteService.favorteproducts(this.authService.currentUserValue?.id).subscribe(value => {
        this.books = value ['books'];

        this.books.forEach(function (val) {
          val.isfavorite =true;
        });
      });


  }


  toggleicon(book:Book,i){

    if(book.isfavorite){
      document.getElementById(i.toString()).className="fa fa-thumbs-down";

      // @ts-ignore
      this.myfavorteService.deleteFavorte({user_id:this.authService.currentUserValue?.id , book_id:book?.id}).subscribe(value1 => {
        window.location.reload();
      });
    }else {
      console.log("fa");
      document.getElementById(i.toString()).className="fa fa-thumbs-up";
      // @ts-ignore
      this.myfavorteService.addtofavorte({user_id:this.authService.currentUserValue?.id , book_id:book?.id}).subscribe(res=>{
        window.location.reload();
      })
    }
  }

}

import {Component, OnInit} from '@angular/core';
import {BookService} from "./services/book.service";
import {Book} from "./models/book";
import {User} from "./models/user";
import {UserService} from "./services/user.service";
import {Router} from "@angular/router";
import {AdminService} from "./services/admin.service";
import {SharedService} from "./services/shared.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'App';
  books: Book[];
  user:User;
  serc :string;


  constructor(private bookService: BookService,private uerService:UserService,
              private router: Router,private adminService:AdminService,public sharedService:SharedService) {

  };


  ngOnInit(): void {
 this.user = this.uerService.currentUserValue;

  }

  logout() {
    this.toggleSidebar();
    this.uerService.logout();
    this.router.navigate(['/login']);
  }

  serch(){
    console.log(this.serc);
    this.bookService.SerchBooks(this.serc).subscribe(value => {
     this.bookService.book = value['books'];
   if(this.bookService.book){

     this.router.navigate(['/serch']);

   }

    });
  }



  toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('opened');
  }

  logOut() {
  /*  this.auth.logout().subscribe(value => {
      window.location.reload();
      localStorage.removeItem("token");

    });
    this.router.navigate(["/login"]);*/
  }
}

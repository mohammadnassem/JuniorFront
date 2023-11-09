import {Component, OnInit} from '@angular/core';
import {BookService} from "../../services/book.service";
import {Book} from "../../models/book";
import {PublisherService} from "../../services/publisher.service";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {Publisher} from "../../models/publisher";
import {AuthorService} from "../../services/author.service";
import {Author} from "../../models/author";
import {AutherBook} from "../../models/auther-book";
import {Router} from "@angular/router";
import {AlertService} from "../../services/alert.service";
import {BranchBook} from "../../models/branch-book";
import {Pivot} from "../../models/pivot";
import {BranchService} from "../../services/branch.service";
import {Branches} from "../../models/branches";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  book: Book;
  categories: Category[];
  publisher: Publisher[];
  public categorySelected: number = -1;
  public randomElements: Category[] = [];
  public showRandomElements = false;
  files: any;
  flag: boolean;
  auhtors: Author[];
  autherBook:AutherBook;
   arr :number[];
  selectedItems :Author [] ;
  dropdownSettings = {};
  branches :Branches[];


  constructor(private branchService:BranchService, private router: Router, private bookService: BookService, private publisherService: PublisherService, private categoryService: CategoryService,private authorService: AuthorService,private alertService: AlertService) {
    this.book = new Book();
    this.autherBook = new AutherBook();
this.arr =[];



  }

  // @ts-ignore
  ngOnInit(): void {
    this.flag = false;
    this.categoryService.getMainCategories().subscribe(value => {
      this.categories = value['category'] as Category[];

      this.publisherService.getAllPublishers().subscribe(res => {
        this.publisher = res['publishers'];
        this.authorService.getAllAuthors().subscribe(value1 => {
          this.auhtors = value1['authors'];


        });

      });
    });

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  addAuterToBook(book: Book){
    this.autherBook.title = book?.title;

      for (let i of this.selectedItems) {
          this.arr.push(i.id)

      }

      this.autherBook.user_id=this.arr;
   console.log( this.autherBook);
    this.authorService.addBookToauther(this.autherBook).subscribe(value => {
      console.log(value);
    });



  }

  addBook(book: Book) {
    if (this.flag == true) {

      book.photo = this.files.name;
    }

    book.category_id = this.categorySelected;
    this.bookService.addBook(book).subscribe(res => {
        alert(res['msg']);
      this.addAuterToBook(book);
      if (this.flag == true) {
        this.uploadphoto();

      }
      this.flag = false;
      alert(res['msg']);
     // window.location.reload();
this.router.navigate(["book/add/branche/",book.title])

      },
      error => {
        this.alertService.error("لايمكن اضافه الكتاب ");


      });

  }


  changeListener(event: any){
    this.files = event.target.files[0];
    this.flag = true;
    let formdate = new FormData();
    console.log(event.target.files[0]);
    formdate.append("file", this.files, this.files.name);
    this.bookService.fileImport(formdate).subscribe(value => {
      alert("تم اضافه الكتب ");

    });
  }

  onFileSelect(event: any) {

    this.files = event.target.files[0];
    this.flag = true;

  }

  uploadphoto() {
    let formdate = new FormData();
    formdate.append("file", this.files, this.files.name);
    this.bookService.uploadphoto(formdate).subscribe(value => {
      console.log(value);

    });
  }


  public setAnotherSelect(numberId) {
    this.categorySelected = numberId;
    this.showRandomElements = true;
    this.randomElements = [];
    this.categoryService.getCategoryWithSub(numberId).subscribe(
      value => {
        this.randomElements = value['category'];
        if (this.randomElements.length > 0) {

        } else {
          this.randomElements = [];
          this.showRandomElements = false;
        }
      }
    );

  }

  onItemSelect(item: any) {
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }



}

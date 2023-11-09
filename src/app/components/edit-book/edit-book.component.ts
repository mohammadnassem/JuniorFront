import {Component, OnInit} from '@angular/core';
import {BookService} from "../../services/book.service";
import {Book} from "../../models/book";
import {ActivatedRoute} from "@angular/router";
import {Category} from "../../models/category";
import {Publisher} from "../../models/publisher";
import {Author} from "../../models/author";
import {AutherBook} from "../../models/auther-book";
import {PublisherService} from "../../services/publisher.service";
import {CategoryService} from "../../services/category.service";
import {AuthorService} from "../../services/author.service";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
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


  constructor(private bookService: BookService, private publisherService: PublisherService, private categoryService: CategoryService,private authorService: AuthorService,private route: ActivatedRoute) {
    this.book = new Book();
    this.autherBook = new AutherBook();
    this.arr =[];
  }

  // @ts-ignore
  ngOnInit(): void {
    this.flag = false;
    this.bookService.getBook(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(value => {
      this.book = value['book'];
      this.categorySelected = this.book?.category_id;
      this.authorService.getAuthorByBook(this.book?.id).subscribe(val => {
                 this.selectedItems = val['authors'];

      });
    });


    this.categoryService.getAllCategories().subscribe(value => {
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
    this.autherBook.title = book.title;
this.arr=[];
    for (let i of this.selectedItems) {
      this.arr.push(i.id);
    }


    this.autherBook.user_id=this.arr;

    console.log(this.autherBook);
    this.authorService.addBookToauther(this.autherBook).subscribe(value => {
      console.log(value);
      this.selectedItems = []
    });



  }

  editbook(book: Book) {
    if (this.flag == true) {

      book.photo = this.files.name;
    }

    book.category_id = this.categorySelected;
    this.bookService.updateBook(book.id,book).subscribe(res => {
      if (this.flag == true) {
        this.uploadphoto();

      }
      this.addAuterToBook(book);

      this.flag = false;
      window.location.reload();
    });

  }


  changeListener(event: any){
    this.files = event.target.files[0];
    this.flag = true;
    let formdate = new FormData();
    console.log(event.target.files[0]);
    formdate.append("file", this.files, this.files.name);
    this.bookService.fileImport(formdate).subscribe(value => {
      console.log(value);

    });
  }

  onFileSelect(event: any) {

    this.files = event.target.files[0];
    this.flag = true;
    console.log("dsds");

  }

  uploadphoto() {
    console.log("dsds");
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

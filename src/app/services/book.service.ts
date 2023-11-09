import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from "../models/book";


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  api = "/api";

  book : Book[];




  getAllBooks(){

    return this.http.get(this.api + "/Books");
  }

  getbookbytitle(title: string) {
    return this.http.get(this.api + "/Book/bytitle/" + title);
  }
  getBook(book_id: number) {
    return this.http.get(this.api + "/Books/" + book_id);
  }


  addBook(book: Book) {
    return this.http.post(this.api + "/Books/add-Book",book );
  }


  updateBook(book_id: number,book: Book) {
    return this.http.post(this.api + "/Books/update-Book/" + book_id,book );
  }

  deleteBook(book_id: number) {
    return this.http.post(this.api + "/Books/delete/" + book_id, {});
  }

  getBooksByUser(user_id: number) {
    return this.http.get(this.api + "/Books/byuser/" + user_id);
  }

  SerchBooks(q:string) {
    return this.http.post(this.api + "/Books/serch" , {q});
  }
  fileImport(file:any){
  return this.http.post(this.api + "/import" , file);
}
  fileExport() {
    return this.http.get(this.api + "/file-export" );
  }
  uploadphoto(photo:any){
    return this.http.post(this.api + "/uploadphoto" , photo);
  }

  getRecomend(rec:any){
    return this.http.post(this.api + "/Books/recomend",rec);
  }

  getBookRec(id:number){
    return this.http.get(this.api + "/recomend/user/"+id );
  }

}

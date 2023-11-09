import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Publisher} from "../models/publisher";
import {Author} from "../models/author";
import {AutherBook} from "../models/auther-book";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  api = "/api";
  constructor(private http: HttpClient) { }

  getAllAuthors(){

    return this.http.get(this.api + "/author");
  }


  getAuthor(author_id: number) {
    return this.http.get(this.api + "/author/details/" + author_id);
  }


  addAuthor(author: Author) {
    return this.http.post(this.api + "/author/add",author );
  }


  updateAuthor(author_id: number,author: Author) {
    return this.http.post(this.api + "/author/update/" + author_id,author );
  }

  deleteAuthor(author_id: number) {
    return this.http.post(this.api + "/author/delete/" + author_id, {});
  }
  getAuthorWithBooks(author_id: number) {
    return this.http.get(this.api + "/author/Books/" + author_id);
  }
  getAuthorByBook(book_id: number) {
    return this.http.get(this.api + "/author/" + book_id);
  }
  addBookToauther(autherBook:AutherBook){
    return this.http.post(this.api + "/author/Book/add" , autherBook);
  }
}

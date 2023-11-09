import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../models/book";
import {BookUser} from "../models/book-user";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  api = "/api";
  constructor(private http: HttpClient) { }


  addReservation(book_user:BookUser) {
    return this.http.post(this.api + "/reservation/add",book_user );
  }

  getAllBooksReservation(){

    return this.http.get(this.api + "/reservation");
  }


  getAllReservationWithOutConfirm() {

    return this.http.get(this.api + "/reservation/order");
  }


  ConfirmReservation(book_user:BookUser) {
    return this.http.post(this.api + "/reservation/confirm",book_user );
  }

  ConfirmReturn(book_user:BookUser){
    return this.http.post(this.api + "/reservation/return" ,book_user);
  }

  getAllBooksReservationByUser(user_id: number) {
    return this.http.get(this.api + "/reservation/books/user/" + user_id);
  }

  DeleteReservation(book_user:BookUser) {
    return this.http.post(this.api + "/reservation/delete/" , book_user);
  }




}

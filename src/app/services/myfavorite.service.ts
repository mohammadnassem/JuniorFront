import { Injectable } from '@angular/core';
import {Book} from "../models/book";
import {HttpClient} from "@angular/common/http";
import {MyFavorite} from "../models/my-favorite";

@Injectable({
  providedIn: 'root'
})
export class MyfavoriteService {

  constructor(private http: HttpClient) { }
  api = "/api";

  addtofavorte(myFavorite: MyFavorite) {
    return this.http.post(this.api + "/addtofavorte",myFavorite );
  }

  deleteFavorte(myFavorite: MyFavorite) {
    return this.http.post(this.api + "/deletefavorte" , myFavorite);
  }
  favorteproducts(user_id:number){
    return this.http.get(this.api + "/favorteBooks/" + user_id);
  }

}

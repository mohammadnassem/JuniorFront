import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Author} from "../models/author";
import {Book} from "../models/book";
import {Pivot} from "../models/pivot";
import {Branches} from "../models/branches";

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  api = "/api";
  constructor(private http: HttpClient) { }

  getAllBranch(){

    return this.http.get(this.api + "/branch");
  }


  getBranch(branch_id: number) {
    return this.http.get(this.api + "/branch/" + branch_id);
  }


  addBranch(book: Branches) {
    return this.http.post(this.api + "/branch/add",book );
  }


  updateBranch(branch_id: number,book: Book) {
    return this.http.post(this.api + "/branch/update/" + branch_id,book );
  }

  deleteBranch(branch_id: number) {
    return this.http.post(this.api + "/branch/delete/" + branch_id, {});
  }
  getBooksByBranch(branch_id: number) {
    return this.http.get(this.api + "/branch/Books/" + branch_id);
  }

  getLocationBook(book_id: number) {
    return this.http.get(this.api + "/branch/Book/" + book_id);
  }
  addBooktobranche(Pivo:Pivot) {
    return this.http.post(this.api + "/addbook/branche", Pivo);
  }
  getLocationallBook(){
    return this.http.post(this.api + "/Books/loca", {});
  }

}

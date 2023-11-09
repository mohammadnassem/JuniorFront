import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Publisher} from "../models/publisher";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  api = "/api";

  constructor(private http: HttpClient) {
  }


  getAllCategories() {

    return this.http.get(this.api + "/category");
  }


  getCategoryWithSub(category_id: number) {
    return this.http.get(this.api + "/category/" + category_id);

  }

  getMainCategories() {
    return this.http.get(this.api + "/main/category" );

  }


  addCategory(category: Category) {
    return this.http.post(this.api + "/category/add", category);
  }


  updateCategory(category_id: number, category: Category) {
    return this.http.post(this.api + "/category/update/" + category_id, category);
  }

  deleteCategory(category_id: number) {
    return this.http.post(this.api + "/category/delete/" + category_id, {});
  }
  getBooksByCategory(category_id: number) {
    return this.http.get(this.api + "/category/Books/" + category_id);
  }

  getBooksByCategoryAndPublisher(category_id: number,publisher_id:number) {
    return this.http.get(this.api + "/category/Books/" + category_id+'/'+publisher_id);
  }


  getCategoryWithSubWithBook(category_id: number) {
    return this.http.get(this.api + "/category/sub/book/" + category_id);
  }

  getCategoryByBookId(book_id: number){
    return this.http.get(this.api + "/category/Book/" + book_id);
  }
}

import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
  categories:Category[];
  subcategories:Category[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getMainCategories().subscribe(
      value => {
  this.categories = value['category'];
        console.log(value);
      }
    );

  }

  subcat(id:number){
    this.categoryService.getCategoryWithSub(id).subscribe(value => {
     this.subcategories= value['category']
    })
  }

}

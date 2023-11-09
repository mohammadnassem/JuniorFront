import { Component, OnInit } from '@angular/core';

import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categories:Category[];
  subcategories:Category;
  constructor(private categoryService: CategoryService,private alertService: AlertService) {
    this.subcategories = new Category();
  }

  ngOnInit(): void {
    this.categoryService.getMainCategories().subscribe(value => {
     this.categories= value['category'];
    });


  }

  addPublisher(category: Category){
    this.alertService.clear();
    this.categoryService.addCategory(category).subscribe(value => {
      alert(value['msg']);
      window.location.reload();
      },
      error => {
        this.alertService.error("لايمكن اضافه الصنف ");

      });
  }

}

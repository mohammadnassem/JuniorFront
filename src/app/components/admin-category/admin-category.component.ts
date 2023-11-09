import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {
  category:Category[];
  constructor(private categoryService: CategoryService,private alertService: AlertService) {


  }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(value => {
      this.category = value['category'];
      console.log(value);

    });
  }
  delete(id:number){
    this.alertService.clear();
    this.categoryService.deleteCategory(id).subscribe(value => {
        alert(value['msg']);
        window.location.reload();
      },
      error => {
        this.alertService.error("لايمكن حذف الصنف ");

      });
  }
}

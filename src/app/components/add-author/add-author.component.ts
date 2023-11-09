import { Component, OnInit } from '@angular/core';
import {AuthorService} from "../../services/author.service";
import {Author} from "../../models/author";
import {SharedService} from "../../services/shared.service";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  auhtor: Author;

  constructor(private authorService: AuthorService,private alertService: AlertService) {
    this.auhtor = new Author();
  }

  ngOnInit(): void {

  }

  addAuthor(author:Author){
    this.alertService.clear();
    console.log(this.auhtor);
    this.authorService.addAuthor(author).subscribe(value => {
      alert(value['msg']);
        window.location.reload();
      },
      error => {
        this.alertService.error("لايمكن اضافه الكاتب ");

      });
  }

}

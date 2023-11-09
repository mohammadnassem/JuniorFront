import { Component, OnInit } from '@angular/core';
import {Author} from "../../models/author";
import {AuthorService} from "../../services/author.service";
import {ActivatedRoute} from "@angular/router";
import {SharedService} from "../../services/shared.service";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  auhtor: Author;

  constructor(private authorService: AuthorService, private route: ActivatedRoute,private alertService: AlertService) {
    this.auhtor = new Author();
  }

  ngOnInit(): void {
    this.authorService.getAuthor(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(value => {
     this.auhtor = value['author'];
     console.log(value);
    });

  }

  addAuthor(author:Author){
    this.alertService.clear();
    this.authorService.updateAuthor(author.id,author).subscribe(value => {
      alert(value['msg']);
      window.location.reload();
    },
  error => {
  this.alertService.error("لايمكن تعديل المعلومات ");

}
);
  }

}


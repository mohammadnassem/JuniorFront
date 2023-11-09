import { Component, OnInit } from '@angular/core';
import {Publisher} from "../../models/publisher";
import {PublisherService} from "../../services/publisher.service";
import {ActivatedRoute} from "@angular/router";
import {Author} from "../../models/author";
import {AuthorService} from "../../services/author.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-view-auther',
  templateUrl: './view-auther.component.html',
  styleUrls: ['./view-auther.component.css']
})
export class ViewAutherComponent implements OnInit {

  auhtor: Author;
  constructor(private authorService: AuthorService,private route: ActivatedRoute,public datePipe: DatePipe) { }

  ngOnInit(): void {
    this.authorService.getAuthor(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(value => {

    this.auhtor = value['author'];

    });
  }
}

import { Component, OnInit } from '@angular/core';
import {PublisherService} from "../../services/publisher.service";
import {Publisher} from "../../models/publisher";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-publisher',
  templateUrl: './view-publisher.component.html',
  styleUrls: ['./view-publisher.component.css']
})
export class ViewPublisherComponent implements OnInit {
  publisher: Publisher;
  constructor(private publisherService: PublisherService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.publisherService.getPublisher(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(value => {

      this.publisher = value['publisher'];

    });
  }

}

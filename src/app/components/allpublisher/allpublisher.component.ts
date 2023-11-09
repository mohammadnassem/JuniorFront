import { Component, OnInit } from '@angular/core';
import {PublisherService} from "../../services/publisher.service";
import {Publisher} from "../../models/publisher";

@Component({
  selector: 'app-allpublisher',
  templateUrl: './allpublisher.component.html',
  styleUrls: ['./allpublisher.component.css']
})
export class AllpublisherComponent implements OnInit {
  publishers: Publisher[];
  constructor(private publisherService: PublisherService,) { }

  ngOnInit(): void {
    this.publisherService.getAllPublishers().subscribe(value => {
      this.publishers = value['publishers'];
    });
  }

}

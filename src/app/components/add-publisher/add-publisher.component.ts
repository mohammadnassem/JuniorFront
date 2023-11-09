import { Component, OnInit } from '@angular/core';
import {PublisherService} from "../../services/publisher.service";
import {Publisher} from "../../models/publisher";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css']
})
export class AddPublisherComponent implements OnInit {
  publisher: Publisher;
  constructor(private publisherService: PublisherService,private alertService: AlertService) {
    this.publisher = new Publisher();
  }

  ngOnInit(): void {


  }

  addPublisher(publisher: Publisher){
    this.alertService.clear();
    this.publisherService.addPublisher(publisher).subscribe(value => {
      alert(value['msg']);
      window.location.reload();
      },
      error => {
        this.alertService.error("لايمكن اضافه دار النشر ");

      });
  }

}

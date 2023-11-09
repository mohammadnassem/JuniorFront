import { Component, OnInit } from '@angular/core';
import {PublisherService} from "../../services/publisher.service";
import {Publisher} from "../../models/publisher";
import {SharedService} from "../../services/shared.service";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-view-all-publisher',
  templateUrl: './view-all-publisher.component.html',
  styleUrls: ['./view-all-publisher.component.css']
})
export class ViewAllPublisherComponent implements OnInit {
  publishers: Publisher[];
  constructor(private publisherService: PublisherService, public sharedService: SharedService,private alertService: AlertService) { }

  ngOnInit(): void {
    this.publisherService.getAllPublishers().subscribe(value => {
     this.publishers = value['publishers'];
    })
  }
  delete(id:number){
    this.alertService.clear();
    this.publisherService.deletePublisher(id).subscribe(value => {
      console.log(value);
        alert(value['msg']);
      window.location.reload();
    },
      error => {
        this.alertService.error("لايمكن حذف دار النشر ");

      });
  }
}

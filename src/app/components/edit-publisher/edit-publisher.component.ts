import {Component, OnInit} from '@angular/core';
import {PublisherService} from "../../services/publisher.service";
import {Publisher} from "../../models/publisher";
import {ActivatedRoute} from "@angular/router";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-edit-publisher',
  templateUrl: './edit-publisher.component.html',
  styleUrls: ['./edit-publisher.component.css']
})
export class EditPublisherComponent implements OnInit {
  publisher: Publisher;

  constructor(private publisherService: PublisherService, private route: ActivatedRoute,private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.publisherService.getPublisher(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(value => {
      this.publisher = value['publisher'];
      console.log(value);
    });
  }

  edit(publisher: Publisher) {
    this.alertService.clear();
    this.publisherService.updatePublisher(publisher.id, publisher).subscribe(value => {
        alert(value['msg']);
        window.location.reload();
      },
      error => {
        this.alertService.error("لايمكن تعديل المعلومات ");

      }
    );
  }

}

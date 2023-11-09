import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../../services/reservation.service";
import {BookUser} from "../../models/book-user";
import {DatePipe} from "@angular/common";
import {SharedService} from "../../services/shared.service";
import {CategoryService} from "../../services/category.service";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  reservation:BookUser[];

  constructor(private reservationService:ReservationService, public datePipe: DatePipe,public sharedService:SharedService,private alertService: AlertService){

  }

  ngOnInit(): void {


    this.reservationService.getAllBooksReservation().subscribe(res=>{
      this.reservation=res['reservations'];
      console.log(this.reservation[0]);
    });
  }

  confirm(book_user:BookUser){
    this.alertService.clear();
    this.reservationService.ConfirmReturn(book_user).subscribe(res=>{
        alert(res['msg']);
        window.location.reload();
      },
      error => {
        this.alertService.error("لايمكن اعاده الكتاب ");

      });
  }

}

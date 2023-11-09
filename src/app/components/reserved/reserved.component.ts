import { Component, OnInit } from '@angular/core';
import {BookUser} from "../../models/book-user";
import {ReservationService} from "../../services/reservation.service";
import {DatePipe} from "@angular/common";
import {BookService} from "../../services/book.service";
import {SharedService} from "../../services/shared.service";
import {CategoryService} from "../../services/category.service";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-reserved',
  templateUrl: './reserved.component.html',
  styleUrls: ['./reserved.component.css']
})
export class ReservedComponent implements OnInit  {
  reservation:BookUser[];

  constructor(private reservationService:ReservationService, public datePipe: DatePipe,public sharedService:SharedService,private alertService: AlertService){

  }

  ngOnInit(): void {


    this.reservationService.getAllReservationWithOutConfirm().subscribe(res=>{
      this.reservation=res['reservations'];
console.log(this.reservation[0]);
    });
  }

  confirm(book_user:BookUser){
    this.alertService.clear();
    this.reservationService.ConfirmReservation(book_user).subscribe(res=>{
        alert(res['msg']);
        window.location.reload();
      },
      error => {
        this.alertService.error("لم يتم قبول الطلب ");

      });
  }

}

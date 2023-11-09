import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  api = "/api";
  constructor(private http: HttpClient) { }

  DistributeBooks(req:any){
    return this.http.post(this.api + "/Books/distribute",req );
  }
  getuserByid(id: number){
    return this.http.get(this.api + "/user/"+ id );
  }


}

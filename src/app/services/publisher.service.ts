import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Publisher} from "../models/publisher";

@Injectable({
  providedIn: 'root'
})
export class PublisherService {
  api = "/api";
  constructor(private http: HttpClient) { }

  getAllPublishers(){

    return this.http.get(this.api + "/Publishers");
  }


  getPublisher(Publisher_id: number) {
    return this.http.get(this.api + "/Publishers/" + Publisher_id);
  }


  addPublisher(publisher: Publisher) {
    return this.http.post(this.api + "/Publishers/add-Publisher",publisher );
  }


  updatePublisher(Publisher_id: number,publisher: Publisher) {
    return this.http.post(this.api + "/Publishers/update-Publisher/" + Publisher_id,publisher );
  }

  deletePublisher(Publisher_id: number) {
    return this.http.post(this.api + "/Publishers/delete/" + Publisher_id, {});
  }
  getBooksByPublisher(Publisher_id: number) {
    return this.http.get(this.api + "/Publishers/Books/" + Publisher_id);
  }


}

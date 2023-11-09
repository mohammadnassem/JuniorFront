import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, config, Observable} from "rxjs";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private authUrl = '/api/auth/';

 private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http: HttpClient) {
   this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
   this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email, password) {
    return this.http.post<any>(this.authUrl + "sign", { email, password })
      .pipe(map(user => {
        if(user['status']== true){
          location.reload(true);
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user['user']));
          this.currentUserSubject.next(user['user']);

          return user;
        }else if(user['status']== false){
            return false;

        }


      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    location.reload(true);

  }

  uploadphoto(photo:any){
    return this.http.post(this.authUrl + "uploadphoto" , photo);
  }

  updateProfile(user: User) {


    return this.http.post(this.authUrl + "update", user);

  }

  register(user: User) {


    return this.http.post(this.authUrl + "register", user);

  }

  // login(user: User)  {
  //
  //   return this.http.post(this.authUrl + "login", user);
  //
  // }
  //
  //
  // logout() {
  //
  //
  //   return this.http.post(this.authUrl + "logout", null);
  // }

  isLoggedIn(): boolean {
    return !! this.currentUserValue;
  }

  getUserProfile() {

    return this.http.get(this.authUrl + "profile");

  }

  getToken() {
    return localStorage.getItem("token");
  }


  refresh() {

    return this.http.post<any>(this.authUrl + "refresh", null);

  }

  refresh_token() {
    this.refresh().subscribe(res => {
      localStorage.setItem('token', res.token);
    })
  }

getimg(){
  return this.http.get(this.authUrl + "profile");
}


}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HomeComponent} from './components/home/home.component';
import {AddbookComponent} from './components/addbook/addbook.component';
import {AddFacultyComponent} from './components/add-faculty/add-faculty.component';
import {AddPublisherComponent} from './components/add-publisher/add-publisher.component';

import {DetailsComponent} from './components/details/details.component';
import {EditBookComponent} from './components/edit-book/edit-book.component';
import {FacultyComponent} from './components/faculty/faculty.component';
import {FavouriteComponent} from './components/favourite/favourite.component';
import {HistoryComponent} from './components/history/history.component';
import {ReservedComponent} from './components/reserved/reserved.component';
import {ReserveComponent} from './components/reserve/reserve.component';

//import {TokenInterceptorServiceService} from "./services/token-interceptor-service.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BookOverviewComponent} from './components/book-overview/book-overview.component';
import {SharedService} from "./services/shared.service";
import {DatePipe} from "@angular/common";
import {ViewPublisherComponent} from './components/view-publisher/view-publisher.component';
import {ViewBookComponent} from './components/view-book/view-book.component';
import {ViewBookByAuthorComponent} from './components/view-book-by-author/view-book-by-author.component';
import {ViewAutherComponent} from './components/view-auther/view-auther.component';
import {AddAuthorComponent} from './components/add-author/add-author.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {ViewAuthersComponent} from './components/view-authers/view-authers.component';
import {EditAuthorComponent} from './components/edit-author/edit-author.component';
import {ViewAllPublisherComponent} from './components/view-all-publisher/view-all-publisher.component';
import {EditPublisherComponent} from './components/edit-publisher/edit-publisher.component';
import {ViewallBookComponent} from './components/viewall-book/viewall-book.component';
import {ViewCategoriesComponent} from './components/view-categories/view-categories.component';
import {AllCategoriesComponent} from './components/all-categories/all-categories.component';
import {AllpublisherComponent} from './components/allpublisher/allpublisher.component';
import {AllbookreserveByuserComponent} from './components/allbookreserve-byuser/allbookreserve-byuser.component';
import {AddCategoryComponent} from './components/add-category/add-category.component';
import {AdminCategoryComponent} from './components/admin-category/admin-category.component';
import {SerchBookComponent} from './components/serch-book/serch-book.component';
import {ViewBranchComponent} from './components/view-branch/view-branch.component';
import {BranchDetalComponent} from './components/branch-detal/branch-detal.component';
import {SearchfilterPipe} from './searchfilter.pipe';
import {SearchBookPipe} from './search-book.pipe';
import { LoginComponent } from './components/login/login.component';
import { AlertComponent } from './components/alert/alert.component';
import { RegisterComponent } from './components/register/register.component';
import { LibrarySettingsComponent } from './components/library-settings/library-settings.component';
import { HomeBookComponent } from './components/home-book/home-book.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { SerchAuthorPipe } from './serch-author.pipe';
import { SerchPublisherPipe } from './serch-publisher.pipe';
import { SerchReservedPipe } from './serch-reserved.pipe';
import { BookBrancheComponent } from './components/book-branche/book-branche.component';
import { SerchBranchPipe } from './serch-branch.pipe';
import { LocationBooksComponent } from './components/location-books/location-books.component';
import { AddbrancheComponent } from './components/addbranche/addbranche.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddbookComponent,
    AddFacultyComponent,
    AddPublisherComponent,
    DetailsComponent,
    EditBookComponent,
    FacultyComponent,
    FavouriteComponent,
    HistoryComponent,
    ReservedComponent,
    ReserveComponent,

    BookOverviewComponent,
    ViewPublisherComponent,
    ViewBookComponent,
    ViewBookByAuthorComponent,
    ViewAutherComponent,
    AddAuthorComponent,
    ViewAuthersComponent,
    EditAuthorComponent,
    ViewAllPublisherComponent,
    EditPublisherComponent,
    ViewallBookComponent,
    ViewCategoriesComponent,
    AllCategoriesComponent,
    AllpublisherComponent,
    AllbookreserveByuserComponent,
    AddCategoryComponent,
    AdminCategoryComponent,
    SerchBookComponent,
    ViewBranchComponent,
    BranchDetalComponent,
    SearchfilterPipe,
    SearchBookPipe,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    LibrarySettingsComponent,
    HomeBookComponent,
    ProfileComponent,
    FooterComponent,
    SerchAuthorPipe,
    SerchPublisherPipe,
    SerchReservedPipe,
    BookBrancheComponent,
    SerchBranchPipe,
    LocationBooksComponent,
    AddbrancheComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,


  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptorServiceService,
    //   multi: true,
    //
    // }
    ,
    SharedService,
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

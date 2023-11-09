import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AddbookComponent} from "./components/addbook/addbook.component";
import {AddFacultyComponent} from "./components/add-faculty/add-faculty.component";
import {AddPublisherComponent} from "./components/add-publisher/add-publisher.component";
import {DetailsComponent} from "./components/details/details.component";
import {EditBookComponent} from "./components/edit-book/edit-book.component";
import {FacultyComponent} from "./components/faculty/faculty.component";
import {FavouriteComponent} from "./components/favourite/favourite.component";
import {HistoryComponent} from "./components/history/history.component";
import {ReservedComponent} from "./components/reserved/reserved.component";
import {ReserveComponent} from "./components/reserve/reserve.component";
import {BookOverviewComponent} from "./components/book-overview/book-overview.component";
import {ViewPublisherComponent} from "./components/view-publisher/view-publisher.component";
import {ViewBookComponent} from "./components/view-book/view-book.component";
import {ViewBookByAuthorComponent} from "./components/view-book-by-author/view-book-by-author.component";
import {ViewAutherComponent} from "./components/view-auther/view-auther.component";
import {AddAuthorComponent} from "./components/add-author/add-author.component";
import {ViewAuthersComponent} from "./components/view-authers/view-authers.component";
import {EditAuthorComponent} from "./components/edit-author/edit-author.component";
import {ViewAllPublisherComponent} from "./components/view-all-publisher/view-all-publisher.component";
import {EditPublisherComponent} from "./components/edit-publisher/edit-publisher.component";
import {ViewallBookComponent} from "./components/viewall-book/viewall-book.component";
import {ViewCategoriesComponent} from "./components/view-categories/view-categories.component";
import {AllCategoriesComponent} from "./components/all-categories/all-categories.component";
import {AllpublisherComponent} from "./components/allpublisher/allpublisher.component";
import {AllbookreserveByuserComponent} from "./components/allbookreserve-byuser/allbookreserve-byuser.component";
import {AddCategoryComponent} from "./components/add-category/add-category.component";
import {AdminCategoryComponent} from "./components/admin-category/admin-category.component";
import {SerchBookComponent} from "./components/serch-book/serch-book.component";
import {ViewBranchComponent} from "./components/view-branch/view-branch.component";
import {BranchDetalComponent} from "./components/branch-detal/branch-detal.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {LibrarySettingsComponent} from "./components/library-settings/library-settings.component";
import {HomeBookComponent} from "./components/home-book/home-book.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {BookBrancheComponent} from "./components/book-branche/book-branche.component";
import { AuthGuard } from './guard/auth.guard';
import {LocationBooksComponent} from "./components/location-books/location-books.component";
import {AddbrancheComponent} from "./components/addbranche/addbranche.component";

const routes: Routes = [

  {path: 'addbook', component: AddbookComponent},
  {path: 'addfaculty', component: AddFacultyComponent},
  {path: 'addpublisher', component: AddPublisherComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'edit-book/:id', component: EditBookComponent},
  {path: 'faculty', component: FacultyComponent},
  {path: 'favourite', component: FavouriteComponent, canActivate: [AuthGuard]},
  {path: 'history', component: HistoryComponent},
  {path: 'reserved', component: ReservedComponent},
  {path: 'reserve', component: ReserveComponent},
  {path: 'book-overview', component: BookOverviewComponent},
  {path: 'view/publisher/:id', component: ViewPublisherComponent},
  {path: 'view/book/:id', component: ViewBookComponent},
  {path: 'view/book/author/:id', component: ViewBookByAuthorComponent},
  {path: 'view/author/:id', component: ViewAutherComponent},
  {path: 'add/author', component: AddAuthorComponent, canActivate: [AuthGuard]},
  {path: 'view/authors', component: ViewAuthersComponent},
  {path: 'view/publisher', component: ViewAllPublisherComponent},
  {path: 'edit/publisher/:id', component: EditPublisherComponent},
  {path: 'edit/authors/:id', component: EditAuthorComponent},
  {path: 'view/allbook', component: ViewallBookComponent},
  {path: 'view/allcategory', component: AllCategoriesComponent},
  {path: 'view/allpublisher', component: AllpublisherComponent},
  {path: 'view/Book/reserve/user/:id', component: AllbookreserveByuserComponent},
  {path: 'view/category/:id', component: ViewCategoriesComponent},
  {path: 'add/category', component: AddCategoryComponent},
  {path: 'admin/category', component: AdminCategoryComponent},
  {path: 'serch', component: SerchBookComponent},
  {path: 'viewBranch', component: ViewBranchComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'BranchDetail/:id', component: BranchDetalComponent},
  {path: 'library/settings', component: LibrarySettingsComponent},
  {path: 'home/book/:id', component: HomeBookComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'location/all/books', component: LocationBooksComponent},
  {path: 'add/branche', component: AddbrancheComponent},
  {path: '', component: HomeComponent},
  {path: 'book/add/branche/:title', component: BookBrancheComponent},
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

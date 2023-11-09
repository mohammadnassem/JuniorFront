import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgxPaginationModule} from 'ngx-pagination';

const materials =[
  MatButtonModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  BrowserAnimationsModule,
  MatCarouselModule.forRoot(),
  MatCardModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  NgxPaginationModule,



];


@NgModule({
  imports: [materials],
  exports : [materials]

})
export class MaterialModule { }

import { Pipe, PipeTransform } from '@angular/core';
import {Book} from "./models/book";


@Pipe({
  name: 'searchBook'
})
export class SearchBookPipe implements PipeTransform {

  transform( books:Book[],searchValue:String): Book[] {
    if(!books || !searchValue){
      return  books;
    }

    // @ts-ignore
    return books.filter( book =>
      book.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      book.number_of_copies.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      book.number_pages.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }
}

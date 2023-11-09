import { Pipe, PipeTransform } from '@angular/core';
import {BookUser} from "./models/book-user";
import {Book} from "./models/book";

@Pipe({
  name: 'serchReserved'
})
export class SerchReservedPipe implements PipeTransform {
  transform( bookUsers:BookUser[],searchValue:String): BookUser[] {
    if(!bookUsers || !searchValue){
      return  bookUsers;
    }

    // @ts-ignore
    return bookUsers.filter( bookUser =>
      bookUser.user.first_name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      bookUser.user.id_university.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      bookUser.id.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      bookUser.book.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }
}

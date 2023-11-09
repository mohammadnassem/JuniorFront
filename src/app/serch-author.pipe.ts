import { Pipe, PipeTransform } from '@angular/core';
import {Book} from "./models/book";
import {Author} from "./models/author";

@Pipe({
  name: 'serchAuthor'
})
export class SerchAuthorPipe implements PipeTransform {

  transform( authors:Author[],searchValue:String): Author[] {
    if(!authors || !searchValue){
      return  authors;
    }

    // @ts-ignore
    return authors.filter( author =>
      author.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      author.address.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
     author.id.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }
}

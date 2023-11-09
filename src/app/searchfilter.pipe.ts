import { Pipe, PipeTransform } from '@angular/core';
import {BranchBook} from "./models/branch-book";

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform( branchBooks:BranchBook[],searchValue:String): BranchBook[] {
    if(!branchBooks || !searchValue){
      return  branchBooks;
    }

    // @ts-ignore
    return branchBooks.filter( branchBook =>
      branchBook.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      branchBook.pivot.shelf.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())

    );
  }

}

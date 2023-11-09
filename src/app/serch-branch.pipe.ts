import { Pipe, PipeTransform } from '@angular/core';
import {Author} from "./models/author";
import {Branches} from "./models/branches";

@Pipe({
  name: 'serchBranch'
})
export class SerchBranchPipe implements PipeTransform {


  transform( branches:Branches[],searchValue:String): Branches[] {
    if(!branches || !searchValue){
      return  branches;
    }

    // @ts-ignore
    return branches.filter( branche =>
      branche.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())

    );
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import {Author} from "./models/author";
import {Publisher} from "./models/publisher";

@Pipe({
  name: 'serchPublisher'
})
export class SerchPublisherPipe implements PipeTransform {
  transform( publishers:Publisher[],searchValue:String): Publisher[] {
    if(!publishers || !searchValue){
      return  publishers;
    }

    // @ts-ignore
    return publishers.filter( publisher =>
      publisher.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      publisher.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      publisher.address.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      publisher.id.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }
}

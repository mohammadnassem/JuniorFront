import {Pivot} from "./pivot";

export interface BranchBook {
  pivot:Pivot;
  id: number ;
  title : string;
  number_of_copies : number;
  number_pages:number;
  number_reservation: number;
  price :number;
  edition:number;
  photo:string;
  isbn :number;
  publisher_id: number;
  category_id : number;
  isfavorite:boolean;
  branch_name :string;


}

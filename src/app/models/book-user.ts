import {User} from "./user";
import {Book} from "./book";
import DateTimeFormat = Intl.DateTimeFormat;

export class BookUser {
  id: number;
  book_id: number;
  user_id: number;
  date_out: Date;
  date_in: Date;
  due_date: Date;
  user : User;
  book:Book;
  created_at: Date;
  delay:number;



}

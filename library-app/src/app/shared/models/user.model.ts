import { Book } from './book.model';

export interface User {
  id: string;
  username: string;
  email: string;
  password: string; 
  ownedBooks: Book[];
  borrowedBooks: Book[];
}

import { Book } from './book.model';

export interface User {
  id: string;
  username: string;
  email: string;
  password: string; // Insecure in real-world apps!
  ownedBooks: Book[];
  borrowedBooks: Book[];
}

import { Injectable, signal } from '@angular/core';
import { Book } from '../models/book.model';
import { userData } from '../../../../public/assets/data/userData';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
private userData = signal<User[]>(userData)

private books = signal<Book[]>([
  ...userData.map((user: User) => user.ownedBooks).flat()
]);

getBooks () {
  return this.books.asReadonly()
}

getUserBooks(userId: string): Book[] {
  const user = userData.find(user => user.id === userId);
  return user ? user.ownedBooks : [];
}
}
import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';
import { userData } from '../../../../public/assets/data/userData';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = signal<User[]>(userData);
  public ownedBooks = signal<Book[]>([]);
  private currentUserId = '01'; // this should be dynamically set based on the logged-in user

  constructor() {
    const owned = this.getCurrentUser().ownedBooks;
    this.ownedBooks.set([...owned]); // loads user library
  }

  getCurrentUser(): User {
    return this.users().find((user) => user.id === this.currentUserId)!;
  }

  getFriendsLibraries(): User[] {
    return this.users().filter((user) => user.id !== this.currentUserId);
  }

  returnBook(b: Book) {
    console.log('book returned:');
  }

  addBook(book: Book) {
    console.log('GOT HERE BRUH');
    this.ownedBooks.update((books) => [...books, book]);
    console.log(this.ownedBooks());
  }
}

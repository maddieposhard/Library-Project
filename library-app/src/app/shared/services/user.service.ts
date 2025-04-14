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
  public borrowedBooks = signal<Book[]>([]);
  private currentUserId = '01'; // this should be dynamically set based on the logged-in user

  getCurrentUser(): User {
    return this.users().find((user) => user.id === this.currentUserId)!;
  }

  constructor() {
    const owned = this.getCurrentUser().ownedBooks;
    this.ownedBooks.set([...owned]); // sets the ownedBooks signal to the current user's owned books
    const borrowed = this.getCurrentUser().borrowedBooks;
    this.borrowedBooks.set([...borrowed]); // sets the borrowedBooks signal to the current user's borrowed books
  }

  getFriendsLibraries(): User[] {
    return this.users().filter((user) => user.id !== this.currentUserId); //returns all users except the current user
  }

  getImagePath(book: Book) {
    // returns the image path for a book dynamically between my saved images and user imageURL input
    if (book.image.includes('https://')) {
      return book.image;
    } else {
      return '/assets/book-images/' + book.image;
    }
  }

  returnBook(book: Book) {
    this.borrowedBooks.update((books) =>
      books.filter((b) => b.isbn !== book.isbn)
    ); // filters out the returned book from the borrowedBooks signal
    console.log('Book returned:', book);
  }

  addBook(book: Book) {
    this.ownedBooks.update((books) => [...books, book]); //updates the ownedBooks signal with the new book added to the array
    console.log(this.ownedBooks());
  }
}

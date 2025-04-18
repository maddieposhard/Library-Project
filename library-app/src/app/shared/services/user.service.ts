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
  private friendBooks = signal<Book[]>([]); 
  filteredBooks = signal<Book[]>(this.ownedBooks()); // initially set to userBooks

  private currentUserId = '01'; // this should be dynamically set based on the logged-in user


  getCurrentUser(): User {
    return this.users().find((user) => user.id === this.currentUserId)!;
  }

  constructor() {
    const owned = this.getCurrentUser().ownedBooks;
    this.ownedBooks.set([...owned]); // sets the ownedBooks signal to the current user's owned books
    const borrowed = this.getCurrentUser().borrowedBooks;
    this.borrowedBooks.set([...borrowed]); // sets the borrowedBooks signal to the current user's borrowed books
    const friends = this.getFriendsLibraries(); // gets the friends libraries
    this.friendBooks.set([...friends.map((user) => user.ownedBooks).flat()]); // flattens the array of friends ownedBooks into a single array of books
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

  removeBook(book: Book) {
    this.ownedBooks.update((books) =>
    books.filter((b) => b.isbn !== book.isbn)
    ); // filters out the removed book from the ownedBooks signal
  }

  returnBook(book: Book) {
    this.borrowedBooks.update((books) =>
      books.filter((b) => b.isbn !== book.isbn)
    ); // filters out the returned book from the borrowedBooks signal
    console.log('Book returned:', book);
  }

  addBook(book: Book) {
    const currentBooks = this.ownedBooks(); // gets the current owned books

    const alreadyOwned = currentBooks.some(b => b.isbn === book.isbn); // checks to see if the book isbn matches a book isbn already in current books
    if (alreadyOwned) {
      alert('This book is already owned.'); // alerts the user if the book is already owned
      return; // Exit early if it's already owned
    }
    this.ownedBooks.update((books) => [...books, book]); //updates the ownedBooks signal with the new book added to the array
    console.log(this.ownedBooks());
  }

    borrowBook(book: Book) {
      const currentBooks = this.borrowedBooks();

      const alreadyBorrowed = currentBooks.some(b => b.isbn === book.isbn); // checks to see if the book isbn matches a book isbn already in current books

      if (alreadyBorrowed) {
        alert('This book is already borrowed.'); // alerts the user if the book is already borrowed
        return; // Exit early if it's already borrowed
      }
      console.log('Borrowing book:', book);
      this.borrowedBooks.update((books) => [...books, book]);  // adds the borrowed book to the borrowedBooks signal which was set for user 01 in the constructor
      console.log('Updated borrowed books:', this.borrowedBooks());
    }
    }



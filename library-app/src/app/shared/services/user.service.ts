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
  public friendBooks = signal<Book[]>([]) 
  filteredBooks = signal<Book[]>(this.ownedBooks()); // initially set to userBooks
  

  private currentUserId = signal<string | null>('01');


  getCurrentUser(): User { // returns the user object that matches the currentUserId
    return this.users().find((user) => user.id === this.currentUserId())!;
  }

  setCurrentUser(id: string | null) { 
    this.currentUserId.set(id!); // sets the current user id to the id passed in
    const user = this.getCurrentUser(); // gets the current user object
    this.ownedBooks.set([...user.ownedBooks]); // sets the ownedBooks signal to the current user's owned books
    this.borrowedBooks.set([...user.borrowedBooks]); // sets the borrowedBooks signal to the current user's borrowed books
    this.friendBooks.set(this.getFriendsLibraries().flatMap((u) => u.ownedBooks)); // flatten the array of friends ownedBooks into a single array of books
  }

  getAllUsers(): User[] {
    return this.users(); // returns all users
  }

  getFriendsLibraries(): User[] { 
    return this.users().filter((user) => user.id !== this.currentUserId()); //returns all users except the current user
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
    ); // filters out the book from the ownedBooks signal and returns an updated array that has books that do not match the isbn of the book being removed
  }

  returnBook(book: Book) {
    this.borrowedBooks.update((books) =>
      books.filter((b) => b.isbn !== book.isbn)); // filters out the returned book from the borrowedBooks signal using the same method as above
    this.friendBooks.update((books) => [...books, book]); // adds the returned book back to the friendBooks signal
    // would like to add an order system so they aren't returned to the bottom of the array
  }

  addBook(book: Book) {
    const currentBooks = this.ownedBooks(); // gets the current owned books
    const alreadyOwned = currentBooks.some(b => b.isbn === book.isbn); // checks to see if the book isbn matches a book isbn already in current books
    
    if (alreadyOwned) {
      alert('This book is already owned.'); // alerts the user if the book is already owned
      return; // Exit early if it's already owned
    }
    this.ownedBooks.update((books) => [...books, book]); //updates the ownedBooks signal with the new book added to the array
  }

  borrowBook(book: Book) {
    const currentBooks = this.borrowedBooks();

    const alreadyBorrowed = currentBooks.some(b => b.isbn === book.isbn); // checks to see if the book isbn matches a book isbn already in current books

    if (alreadyBorrowed) {
      alert('This book is already borrowed.'); // alerts the user if the book is already borrowed
      return; // Exit early if it's already borrowed
    }
    this.borrowedBooks.update((books) => [...books, book]);  // adds the borrowed book to the borrowedBooks signal which was set for user 01 in the constructor
    this.friendBooks.update((books) => books.filter((b) => b.isbn !== book.isbn)) // filters out the borrowed book from the friendBooks signal
  }
  }



import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../../shared/models/book.model';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-friend-library',
  imports: [],
  templateUrl: './friend-library.component.html',
  styleUrl: './friend-library.component.css',
})
export class FriendLibraryComponent implements OnInit {
  friendBooks: Book[] = []; // array set in ngOnInit
  selectedBook: Book | null = null; // starts as null, selects a book when clicked for viewing details in a modal

  showModal(book: Book) { // shows the modal with book details
    this.selectedBook = book;
  } 

  private userService = inject(UserService);

  ngOnInit() { // function runs on component initialization
    const friends = this.userService.getFriendsLibraries(); // gets the friends user objects from the userService
    this.friendBooks = friends.map((user) => user.ownedBooks).flat(); // flattens the array of friends ownedBooks into a single array of books
  }

  getImagePathHandler(book: Book) { // returns the image path for a book
    return this.userService.getImagePath(book); // uses the getImagePath function from the userService
  }

  rentBook(book: Book) {
    this.userService.getCurrentUser().borrowedBooks.push(book); // I want to fix this and use .set or .update but I'm getting bugs
    console.log('Book rented:', book);
  }
}

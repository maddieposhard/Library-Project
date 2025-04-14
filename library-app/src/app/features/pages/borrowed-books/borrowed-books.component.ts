import { Component, OnInit, inject } from '@angular/core';
import { Book } from '../../../shared/models/book.model';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-borrowed-books',
  imports: [],
  templateUrl: './borrowed-books.component.html',
  styleUrl: './borrowed-books.component.css',
})
export class BorrowedBooksComponent implements OnInit {
  borrowedBooks: Book[] = []; // array set in ngOnInit
  selectedBook: Book | null = null; // starts as null, selects a book when clicked for viewing details in a modal
  private userService = inject(UserService);
  
  ngOnInit() { // function runs on component initialization
    this.borrowedBooks = this.userService.getCurrentUser().borrowedBooks; // gets the current user's borrowedBooks from the userService
  }

  showModal(book: Book) { // shows the modal with book details
    this.selectedBook = book;
  }

  getImagePathHandler(book: Book) { // returns the image path for a book
    return this.userService.getImagePath(book); // uses the getImagePath function from the userService
  }

  returnBookHandler(book: Book) { // function to return a book, still need to create the returnBook function in the userService
    this.userService.returnBook(book);
  }
}

import { Component, inject } from '@angular/core';
import { Book } from '../../../shared/models/book.model';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-borrowed-books',
  imports: [],
  templateUrl: './borrowed-books.component.html',
  styleUrl: './borrowed-books.component.css',
})
export class BorrowedBooksComponent {
  borrowedBooks: Book[] = [];
  selectedBook: Book | null = null;
  showModal(book: Book) {
    this.selectedBook = book;
  }

  private userService = inject(UserService);

  ngOnInit() {
    this.borrowedBooks = this.userService.getCurrentUser().borrowedBooks;
  }

  getImagePath(book: Book) {
    return '/assets/book-images/' + book.image;
  }

  returnBookHandler(book: Book) {
    this.userService.returnBook(book);
  }
}

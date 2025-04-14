import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { Book } from '../../../shared/models/book.model';

@Component({
  selector: 'app-user-library',
  imports: [],
  templateUrl: './user-library.component.html',
  styleUrl: './user-library.component.css',
})
export class UserLibraryComponent {
  public userBooks = inject(UserService).ownedBooks;
  selectedBook: Book | null = null;
  bookToEdit: Book | null = null;

  showModal(book: Book) {
    this.selectedBook = book;
  }


  getImagePath(book: Book) {
    if (book.image.includes('https://')) {
      return book.image;
    } else {
      return '/assets/book-images/' + book.image;
    }
  }

  editBook(book: Book) {
    this.bookToEdit = book;
    }
}

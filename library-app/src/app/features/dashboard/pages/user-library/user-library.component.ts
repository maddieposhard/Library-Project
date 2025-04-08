import { Component, inject } from '@angular/core';
import { BookService } from '../../../../shared/services/book.service';
import { Book } from '../../../../shared/models/book.model';

@Component({
  selector: 'app-user-library',
  imports: [],
  templateUrl: './user-library.component.html',
  styleUrl: './user-library.component.css'
})
export class UserLibraryComponent {
  private bookService = inject(BookService)

  books = this.bookService.getUserBooks('01')

  getImagePath (book: Book) {
    return '/assets/book-images/' + book.image;
  }
}

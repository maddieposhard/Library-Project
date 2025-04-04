import { Component, inject } from '@angular/core';
import { BookService } from '../../../../shared/services/book.service';
import { Book } from '../../../../shared/models/book.model';

@Component({
  selector: 'app-books-display',
  imports: [],
  templateUrl: './books-display.component.html',
  styleUrl: './books-display.component.css'
})
export class BooksDisplayComponent {
private bookService = inject(BookService)

books = this.bookService.getBooks()

getImagePath (book: Book) {
  return '/assets/book-images/' + book.image;
}
}

import { Component, inject } from '@angular/core';
import { BookService } from '../../../../shared/services/book.service';

@Component({
  selector: 'app-books-display',
  imports: [],
  templateUrl: './books-display.component.html',
  styleUrl: './books-display.component.css'
})
export class BooksDisplayComponent {
private bookService = inject(BookService)

books = this.bookService.getBooks()
}

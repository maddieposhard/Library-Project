import { Component, inject } from '@angular/core';
import { BookService } from '../../../../shared/services/book.service';
import { Book } from '../../../../shared/models/book.model';

@Component({
  selector: 'app-friend-library',
  imports: [],
  templateUrl: './friend-library.component.html',
  styleUrl: './friend-library.component.css'
})
export class FriendLibraryComponent {
  private bookService = inject(BookService)

  books = this.bookService.getBooks()
  
  getImagePath (book: Book) {
    return '/assets/book-images/' + book.image;
  }
}

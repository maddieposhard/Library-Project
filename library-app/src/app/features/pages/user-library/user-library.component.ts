import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { Book } from '../../../shared/models/book.model';

@Component({
  selector: 'app-user-library',
  imports: [],
  templateUrl: './user-library.component.html',
  styleUrl: './user-library.component.css',
})
export class UserLibraryComponent implements OnInit {
  ownedBooks: Book[] = [];

  private userService = inject(UserService);

  ngOnInit() {
    this.ownedBooks = this.userService.getCurrentUser().ownedBooks;
  }

  getImagePath(book: Book) {
    return '/assets/book-images/' + book.image;
  }
}

// private bookService = inject(BookService)

// books = this.bookService.getUserBooks('01')

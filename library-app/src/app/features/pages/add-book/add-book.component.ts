import { Component, inject, signal } from '@angular/core';
import { Book } from '../../../shared/models/book.model';
import { UserService } from '../../../shared/services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  imports: [FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css',
})
export class AddBookComponent {
  private userService = inject(UserService);
  private Books = signal<Book[]>([]);

  public book = signal<Book>({
    title: '',
    author: '',
    genre: [],
    description: '',
    image: '',
    isbn: 0,
  });

  addBookHandler(book: Book) {
    this.userService.addBook(book);
    // console.log('Book added:', book);
  }
}

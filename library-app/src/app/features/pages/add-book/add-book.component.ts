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
  private userService = inject(UserService); // injects the userService to access its functions and properties

  public book = signal<Book>({ // book object to be added
    title: '',
    author: '',
    genre: [],
    description: '',
    image: '',
    isbn: 0,
  });

  addBookHandler(book: Book) { // handler function that calls the addBook function from the userService when a button is pressed
    this.userService.addBook(book);
    // console.log('Book added:', book);
  }
}

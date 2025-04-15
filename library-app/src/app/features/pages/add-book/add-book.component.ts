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
    isbn: null,
  });

  addBookHandler(book: Book) { // handler function that calls the addBook function from the userService when a button is pressed
    if (
      !book.title ||
      !book.author ||
      !book.genre.length ||
      !book.description ||
      !book.isbn
    ) {
      alert('Please fill in all required fields before submitting the book.');
      return;
    }
    //checks to see if any fields are empty and alerts user if they are, ensures empty book won't be added

    this.userService.addBook(book); // calls the addBook function from the userService
    
    this.book.set({
      title: '',
      author: '',
      genre: [],
      description: '',
      image: '',
      isbn: null,
    });
    //resets the book object to empty values after adding the book
  }
}

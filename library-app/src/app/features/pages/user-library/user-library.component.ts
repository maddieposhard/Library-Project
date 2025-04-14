import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { Book } from '../../../shared/models/book.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-library',
  imports: [FormsModule],
  templateUrl: './user-library.component.html',
  styleUrl: './user-library.component.css',
})
export class UserLibraryComponent {
  private userService = inject(UserService);
  public userBooks = inject(UserService).ownedBooks; //accesses ownedBooks from the userService
  selectedBook: Book | null = null; // starts as null, selects a book when clicked for viewing details in a modal
  bookToEdit: Book | null = null; // starts as null, selects a book when clicked for editing in a modal

  title: string = '';
  author: string = '';
  genre: string = '';
  description: string = '';
  image: string = '';
  isbn: number | null = null;

  getImagePathHandler(book: Book) {
    return this.userService.getImagePath(book);
  }

  showModal(book: Book) {
    // shows the modal with book details
    this.selectedBook = book;
  }

  editBook(book: Book) {
    // shows the modal with book details for editing prepopulated in a form
    this.bookToEdit = book;
    this.title = book.title;
    this.author = book.author;
    this.genre = book.genre.join(', ');
    this.description = book.description;
    this.image = book.image;
    this.isbn = book.isbn;
  }

  submitEdit() {
    if (!this.bookToEdit || this.isbn === null) return;
  
    const updatedBook: Book = {
      title: this.title,
      author: this.author,
      genre: [this.genre],
      description: this.description,
      image: this.image,
      isbn: this.isbn
    };

  
    this.userService.ownedBooks.update((books) =>
      books.map((book) =>
        book.isbn === this.bookToEdit!.isbn ? updatedBook : book
      )
    );
  
    console.log('Book updated:', updatedBook);
  
    // Close modal and reset
    this.bookToEdit = null;
  }
}

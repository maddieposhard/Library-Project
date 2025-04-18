import { Component, inject} from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { Book } from '../../../shared/models/book.model';
import { SharedModule } from '../../../shared/shared.module';
import { SearchService } from '../../../shared/services/search.service';
import { SearchBarComponent } from "../../dashboard/search-bar/search-bar.component";

@Component({
  selector: 'app-user-library',
  imports: [SharedModule, SearchBarComponent],
  templateUrl: './user-library.component.html',
  styleUrl: './user-library.component.css',
})
export class UserLibraryComponent {
  private searchService = inject(SearchService);
  private userService = inject(UserService);

  public userFilteredBooks = this.searchService.userFilteredBooks; // sets the value of filteredBooks using the signal set in the searchService
  
  selectedBook: Book | null = null; // starts as null, selects a book when clicked for viewing details in a modal
  bookToEdit: Book | null = null; // starts as null, selects a book when clicked for editing in a modal

  // initial values set for two way binding
  title: string = '';
  author: string = '';
  genre: string = '';
  description: string = '';
  image: string = '';
  isbn: number | null = null;

  getImagePathHandler(book: Book) {
    // returns the image path for a book, main function in user service
    return this.userService.getImagePath(book);
  }

  showModal(book: Book) {
    // shows the modal with book details
    this.selectedBook = book;
  }

  removeBookHandler(book: Book) {
    // removes the book from the user library
    this.userService.removeBook(book);
  }

  editBook(book: Book) {
    // shows the modal with book details for editing prepopulated using two way binding in a form by setting a book to edit and making it truthie
    this.bookToEdit = book;
    this.title = book.title;
    this.author = book.author;
    this.genre = book.genre.join(', ');
    this.description = book.description;
    this.image = book.image;
    this.isbn = book.isbn;
  }

  submitEdit() {
    if (!this.bookToEdit || this.isbn === null) return; // checks and returns if values are null

    // creates a new book object with updated values from the form
    const updatedBook: Book = {
      title: this.title,
      author: this.author,
      genre: [this.genre],
      description: this.description,
      image: this.image,
      isbn: this.isbn,
    };

    // loops over owned books and if the isbn of the book matches the one being edited, it updates the book
    this.userService.ownedBooks.update((books) =>
      books.map((book) => {
        if (book.isbn === this.bookToEdit!.isbn) {
          return updatedBook;
        } else {
          return book;
        }
      })
    );

    // Close modal and reset
    this.bookToEdit = null;
  }
  
}

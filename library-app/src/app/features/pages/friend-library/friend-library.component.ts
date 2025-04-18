import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { Book } from '../../../shared/models/book.model';
import { UserService } from '../../../shared/services/user.service';
import { SharedModule } from '../../../shared/shared.module';
import { SearchService } from '../../../shared/services/search.service';
import { SearchBarComponent } from "../../dashboard/search-bar/search-bar.component";

@Component({
  selector: 'app-friend-library',
  imports: [SharedModule, SearchBarComponent],
  templateUrl: './friend-library.component.html',
  styleUrl: './friend-library.component.css',
})
export class FriendLibraryComponent {
  private userService = inject(UserService);
  private searchService = inject(SearchService)

  public friendBooks = this.searchService.friendFilteredBooks;
  
  selectedBook: Book | null = null; // starts as null, selects a book when clicked for viewing details in a modal
  borrowedBooks = this.userService.borrowedBooks; // sets the value of borrowedBooks using the signal set in the userService
  
  showModal(book: Book) { // shows the modal with book details
    this.selectedBook = book;
  } 

  getImagePathHandler(book: Book) { // returns the image path for a book
    return this.userService.getImagePath(book); // uses the getImagePath function from the userService
  }

  borrowBookHandler(book: Book) {
      this.userService.borrowBook(book); // calls borrowBook function from userService
    }
  }



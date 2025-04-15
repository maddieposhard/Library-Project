import { Component } from '@angular/core';
import { Book } from '../../../shared/models/book.model';

@Component({
  selector: 'app-more-details',
  imports: [],
  templateUrl: './more-details.component.html',
  styleUrl: './more-details.component.css'
})
export class MoreDetailsComponent {
  selectedBook: Book | null = null; // starts as null, selects a book when clicked for viewing details in a modal

  showModal(book: Book) { // shows the modal with book details
    this.selectedBook = book;
  } 
}

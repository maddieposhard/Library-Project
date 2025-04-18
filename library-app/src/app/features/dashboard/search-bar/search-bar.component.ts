import { Component, effect, inject, signal } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { UserService } from '../../../shared/services/user.service';
import { Book } from '../../../shared/models/book.model';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-search-bar',
  imports: [SharedModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  private userService = inject(UserService);
  private userBooks = inject(UserService).ownedBooks; //accesses ownedBooks from the userService
  // private friendBooks = inject(UserService).getFriendsLibraries; //accesses friendBooks from the userService

  filteredBooks = signal<Book[]>(this.userBooks()); // initially set to userBooks
  searchTerm = signal('');

  fuse = new Fuse(this.userBooks(), {
    keys: ['title', 'author', 'genre'],
    includeScore: true,
    threshold: 0.4,
  });

  constructor() {
    effect(() => {
      this.fuse.setCollection(this.userBooks());
      this.applySearch();
    });
  
    effect(() => {
      this.applySearch();
    });
  }


  applySearch() {
    const term = this.searchTerm().trim();
    if (!term) { // if the search term is empty, set filteredBooks to all userBooks
      this.userService.filteredBooks.set(this.userBooks());
      return;
    }

    const results = this.fuse.search(term); // searches for the term in the userBooks
    this.userService.filteredBooks.set(results.map(b => b.item)); // sets the filteredBooks to the search results
  }
}

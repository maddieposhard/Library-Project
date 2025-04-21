import { Injectable, effect, inject, signal } from '@angular/core';
import { UserService } from './user.service';
import { Book } from '../models/book.model';
import Fuse from 'fuse.js';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private userService = inject(UserService);
  searchTerm = signal('');
  userFilteredBooks = signal<Book[]>([]);
  friendFilteredBooks = signal<Book[]>([]);


  constructor() {
    // effect runs when the search term changes
    effect(() => {
      // set inital values for user and friend books
      const userBooks = this.userService.ownedBooks();
      const friendBooks = this.userService.friendBooks(); 
      const term = this.searchTerm();

      // if there is no search, this sets the filteredBooks to the original books arrays
      if (!term) {
        this.userFilteredBooks.set(userBooks);
        this.friendFilteredBooks.set(friendBooks);
        return;
      }

      // create dynamic Fuses for user and friend books
      const userFuse = new Fuse(userBooks, {
        keys: ['title', 'author', 'genre'],
        includeScore: true,
        threshold: 0.4,
      });

      const friendFuse = new Fuse(friendBooks, {
        keys: ['title', 'author', 'genre'],
        includeScore: true,
        threshold: 0.4,
      });

      // set the filteredBooks to the search results
      this.userFilteredBooks.set(userFuse.search(term).map((r) => r.item));
      this.friendFilteredBooks.set(friendFuse.search(term).map((r) => r.item));
    });
  }
}

import { Component, Signal, inject, signal, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import Fuse from 'fuse.js';
import { UserService } from '../../../shared/services/user.service';
import { Book } from '../../../shared/models/book.model';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, SharedModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  // private userService = inject(UserService); // injects the userService to access its functions and properties
  // allBooks: Signal<Book[]> = this.userService.getAllBooks();
  // filteredBooks = signal<Book[]>(this.allBooks()); // initially set to all books

  // searchTerm = signal('');

  // fuse = new Fuse(this.allBooks(), {
  //   keys: ['title', 'author', 'genre'],
  //   includeScore: true, // optional: gives ranking
  //   threshold: 0.4, // lower = stricter matching (0 to 1)
  // });

  
  // constructor() {
  //   // Keep Fuse collection updated if allBooks signal changes
  //   effect(() => {
  //     this.fuse.setCollection(this.allBooks());
  //     this.applySearch(); // reapply search when books update
  //   });

  //   // Run search when searchTerm changes
  //   effect(() => {
  //     this.applySearch(); // reapply search on term change
  //   });
  // }

  // applySearch() {
  //   const term = this.searchTerm().trim();
  //   if (!term) {
  //     this.filteredBooks.set(this.allBooks());
  //     return;
  //   }

  //   const results = this.fuse.search(term);
  //   this.filteredBooks.set(results.map(r => r.item));
  // }


}

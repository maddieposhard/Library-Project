import { Component, effect, inject, signal } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SearchService } from '../../../shared/services/search.service';

@Component({
  selector: 'app-search-bar',
  imports: [SharedModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  private searchService = inject(SearchService);

  // Access signals from SearchService
  userFilteredBooks = this.searchService.userFilteredBooks;
  friendFilteredBooks = this.searchService.friendFilteredBooks;

  // Bind the search term input to the signal
  searchTerm = this.searchService.searchTerm;
}

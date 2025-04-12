import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../../shared/models/book.model';
import { UserService } from '../../../shared/services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-friend-library',
  imports: [RouterLink],
  templateUrl: './friend-library.component.html',
  styleUrl: './friend-library.component.css',
})
export class FriendLibraryComponent implements OnInit {
  friendBooks: Book[] = [];
  showModal = false;

  private userService = inject(UserService);

  ngOnInit() {
    const friends = this.userService.getFriendsLibraries();
    this.friendBooks = friends.map((user) => user.ownedBooks).flat();
  }

  getImagePath(book: Book) {
    return '/assets/book-images/' + book.image;
  }

  rentBook(book: Book) {
    this.userService.getCurrentUser().borrowedBooks.push(book);
    console.log('Book rented:', book);
  }
}

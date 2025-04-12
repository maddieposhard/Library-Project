import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';
import { userData } from '../../../../public/assets/data/userData';
import { Book } from '../models/book.model';
import { BorrowedBooksComponent } from '../../features/pages/borrowed-books/borrowed-books.component';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = signal<User[]>(userData)
  private currentUserId = '01' // this should be dynamically set based on the logged-in user


  getCurrentUser(): User { 
    return this.users().find(user => user.id === this.currentUserId)!;
  } //add get current user handler in user library component, do the same for the others

  getFriendsLibraries(): User[] { 
    return this.users().filter(user => user.id !== this.currentUserId);
  }

  getUserData(): User[] {
    return this.users();
  }

  returnBook (b: Book) {
    console.log ('book returned:')
  }
}





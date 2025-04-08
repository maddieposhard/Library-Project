import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';
import { userData } from '../../../../public/assets/data/userData';
import { Book } from '../models/book.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = signal<User[]>(userData)
  private currentUserId = '01' // this should be dynamically set based on the logged-in user
  // private books = signal<Book[]>([
  //   ...userData.map((user: User) => user.ownedBooks).flat()
  // ]);

  getCurrentUser(): User { 
    return this.users().find(user => user.id === this.currentUserId)!;
  }

  getFriendsLibraries(): User[] { 
    return this.users().filter(user => user.id !== this.currentUserId);
  }

  getUserData(): User[] {
    return this.users();
  }
}


//   currentUser = signal<User>({
//     id: '',
//     username: '',
//     email: '',
//     password: '',
//     ownedBooks: [],
//     borrowedBooks: []
//   })

// //  libraries of everyone else loop over your data for everyone except the current user 
// // myBooks loop over your own rentaed and ownedBooks
// // where your owned books are 


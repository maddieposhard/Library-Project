import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';
import { userData } from '../../../../public/assets/data/userData';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = signal<User[]>(userData)

  otherUserData = ''

  currentUser = signal<User>({
    id: '',
    username: '',
    email: '',
    password: '',
    ownedBooks: [],
    borrowedBooks: []
  })

//  libraries of everyone else loop over your data for everyone except the current user 
// myBooks loop over your own rentaed and ownedBooks
// where your owned books are 


getEveryoneElsesData(){
  // so the current user is always filtered out of the data
}
}

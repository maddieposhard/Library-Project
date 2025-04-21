import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userService = inject(UserService);
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private router = inject(Router);

  login(username: string, password: string): Observable<boolean> {
    const user = this.userService.getAllUsers().find((u) => u.username === username && u.password === password); // returns a user if found, otherwise undefined

    if (user) { // if user is found, set isAuthenticated to true and set current user
      this.isAuthenticated.next(true);
      this.userService.setCurrentUser(user.id);
    } else {
      this.isAuthenticated.next(false);
    }
    return this.getAuthStatus(); // return the authentication status
  }

  getAuthStatus(): Observable<boolean> { // get the current authentication status
    return this.isAuthenticated.asObservable();
  }

  logout() {
    // console.log('hi');
    this.router.navigate(['/login']);
    this.isAuthenticated.next(false);
    this.userService.setCurrentUser(null);
  }
}

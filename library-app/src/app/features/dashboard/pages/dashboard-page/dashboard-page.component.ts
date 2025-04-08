import { Component } from '@angular/core';
import { UserLibraryComponent } from "../user-library/user-library.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [UserLibraryComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {
  displayFriendsBooks () {
    // Logic to display friends' books
  }

  displayUserLibrary () {
    // Logic to display user's library
  }

  displayBorrowedBooks () {
    // Logic to display borrowed books
  }
}

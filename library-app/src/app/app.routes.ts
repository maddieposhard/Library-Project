import { RouterModule, Routes } from '@angular/router';
import { UserLibraryComponent } from './features/pages/user-library/user-library.component';
import { NgModule } from '@angular/core';
import { FriendLibraryComponent } from './features/pages/friend-library/friend-library.component';
import { DashboardPageComponent } from './features/pages/dashboard-page/dashboard-page.component';
import { BorrowedBooksComponent } from './features/pages/borrowed-books/borrowed-books.component';
import { AddBookComponent } from './features/pages/add-book/add-book.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
  },
  {
    path: 'user',
    component: UserLibraryComponent,
  },
  {
    path: 'friend',
    component: FriendLibraryComponent,
  },
  {
    path: 'borrowed',
    component: BorrowedBooksComponent,
  },
  {
    path: 'add',
    component: AddBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

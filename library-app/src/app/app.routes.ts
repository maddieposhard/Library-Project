import { RouterModule, Routes } from '@angular/router';
import { UserLibraryComponent } from './features/pages/user-library/user-library.component';
import { NgModule } from '@angular/core';
import { FriendLibraryComponent } from './features/pages/friend-library/friend-library.component';
import { BorrowedBooksComponent } from './features/pages/borrowed-books/borrowed-books.component';
import { AddBookComponent } from './features/pages/add-book/add-book.component';
import { LoginComponent } from './features/pages/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user',
    component: UserLibraryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'friend',
    component: FriendLibraryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'borrowed',
    component: BorrowedBooksComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add',
    component: AddBookComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

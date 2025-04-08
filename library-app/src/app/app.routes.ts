import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './features/dashboard/pages/dashboard-page/dashboard-page.component';
import { UserLibraryComponent } from './features/dashboard/pages/user-library/user-library.component';
import { NgModule } from '@angular/core';
import { FriendLibraryComponent } from './features/dashboard/pages/friend-library/friend-library.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardPageComponent,
    },
    {
        path: 'user',
        component: UserLibraryComponent
    },
    {
        path: 'friend',
        component: FriendLibraryComponent
    },
    // {
    //     path: 'borrowed',
    //     component: BorrowedBooksComponent
    // }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
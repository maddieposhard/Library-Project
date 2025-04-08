import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './features/dashboard/pages/dashboard-page/dashboard-page.component';
import { BooksDisplayComponent } from './features/library/components/books-display/books-display.component';
import { UserLibraryComponent } from './features/dashboard/pages/user-library/user-library.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: DashboardPageComponent,
    },
    {
        path: 'friends',
        component: BooksDisplayComponent
    },
    {
        path: 'user',
        component: UserLibraryComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
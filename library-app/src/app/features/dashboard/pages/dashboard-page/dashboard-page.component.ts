import { Component } from '@angular/core';
import { BooksDisplayComponent } from "../../../library/components/books-display/books-display.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [BooksDisplayComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}

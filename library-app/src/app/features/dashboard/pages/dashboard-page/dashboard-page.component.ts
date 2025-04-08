import { Component } from '@angular/core';
import { UserLibraryComponent } from "../user-library/user-library.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterLink],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}

import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./features/dashboard/header/header.component";
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'library-app';
  private authService = inject(AuthService);

  isAuthenticated = signal<boolean>(false); // default to false

  constructor() {
    this.authService.getAuthStatus().subscribe((status) => {
      this.isAuthenticated.set(status);
    });
  }

}

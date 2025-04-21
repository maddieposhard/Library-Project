import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private authService = inject(AuthService);


  logoutHandler() {
    console.log('got hereeeee') // need to debug
    this.authService.logout();
  }

}

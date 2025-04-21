import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  username = '';
  password = '';

  
  loginHandler() {
    this.authService.login(this.username, this.password).subscribe((authStatus) => {  //subscribe to observable from login function, name it authStatus
        if (authStatus) { // if authStatus is true navigate to user component
          this.router.navigate(['/user']); 
        } else {
          alert('Invalid username or password');
        }
      });
  }
}

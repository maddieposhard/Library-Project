// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  router = inject(Router);
  authService = inject(AuthService);

  canActivate(): boolean {
    let isAuth = false;
    this.authService.getAuthStatus().subscribe((authStatus) => {
      isAuth = authStatus;
    })
    if (!isAuth) {
      this.router.navigate(['/login']);
      return false
    }
    return isAuth;
  }
}
import { Component, Signal, inject, signal, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { UserService } from '../../../shared/services/user.service';
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, SharedModule, SearchBarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

}

import { Component } from '@angular/core';
import { User } from './account/models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from './account/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentUser: User;
  isCurrentUser = false;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
      if (user) {
        this.isCurrentUser = true;
      }
    });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}

import { Component, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from '../account/services/authentication.service';
import { User } from '../account/models/user';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnDestroy {
  isShow = true;
  currentUser: User;
  currentUserSubscription: Subscription;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      if (user) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
      this.currentUser = user;
    });
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}

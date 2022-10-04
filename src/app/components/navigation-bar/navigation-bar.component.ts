import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthenticationService } from '../../services/authentication.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit, OnDestroy {

  private destroyed$ = new Subject<void>();

  public isShow = true;
  public isDemoToggle = true

  public currentUser: User;
  public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));

  public menuItems = [
    { url: '/operations', name: 'Operations' },
    { url: '/bots', name: 'Trading Bots' },
    { url: '/create', name: 'Create Bot' }
  ]

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private authenticationService: AuthenticationService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.authenticationService.$currentUser.pipe(takeUntil(this.destroyed$)).subscribe(user => {
      this.isShow = !!user
      this.currentUser = user;
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public onDemoToggle(): void {
    const dialogRef = this.dialog.open(DemoModeDialog, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(() => this.isDemoToggle = true);
  }

  public onLogout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}

@Component({
  selector: 'demo-dialog',
  templateUrl: './demo-dialog.component.html',
})
export class DemoModeDialog {

  constructor(public dialogRef: MatDialogRef<DemoModeDialog>) { }

  onOkClick(): void {
    this.dialogRef.close();
  }

}

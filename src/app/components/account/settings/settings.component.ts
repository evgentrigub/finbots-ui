import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { UserProfileDto } from '../../../models/user.model';
import { AuthenticationService } from '../../../services/authentication.service';
import { UserService } from '../../../services/user.service';

interface BrokerPayload {
  text: string;
  isBrokerToken: boolean;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<void>();

  public hide = true;
  public loading = false;

  public profileForm: FormGroup;
  public tinkoffTokenControl: FormControl;

  public broker: BrokerPayload = {
    text: 'Tinkoff',
    isBrokerToken: false,
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private snackbar: MatSnackBar,
  ) {
    if (!this.authenticationService.currentUserValue) {
      this.router.navigate(['/login']);
    }
    this.tinkoffTokenControl = this.formBuilder.control(null);
    this.profileForm = this.getProfileForm();
  }

  public get canSave(): boolean {
    return this.profileForm.valid && this.profileForm.touched;
  }

  ngOnInit() {
    this.getUserProfile().subscribe()
    this.getTinkoffControlChanges().subscribe();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public onRemoveToken(item: BrokerPayload): void {
    item.isBrokerToken = false;
    this.tinkoffTokenControl.reset();
    this.profileForm.markAsTouched();
  }

  public onSubmit(): void {
    if (this.profileForm.invalid) {
      return;
    }
    this.loading = true;

    const profileDto: UserProfileDto = this.profileForm.value;
    this.profileForm.disable();
    this.userService.update(profileDto)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(tokenDto => {
        this.showMessage("Changes saved", true);
        this.loading = false;
        this.profileForm.enable();
        this.profileForm.markAsUntouched();

        this.authenticationService.setCurrentUser(profileDto.email, tokenDto)
        this.broker.isBrokerToken = !!this.tinkoffTokenControl.value

      }, (errorMessage: string) => {
        this.profileForm.enable();
        this.loading = false;
        this.showMessage(errorMessage, false);
      });
  }

  private getUserProfile(): Observable<UserProfileDto> {
    this.loading = true;
    return this.userService.get().pipe(
      takeUntil(this.destroyed$),
      tap(profile => {
        this.loading = false;
        this.profileForm.patchValue(profile)
        this.broker.isBrokerToken = !!profile.tinkoffToken
      })
    )
  }

  private getTinkoffControlChanges(): Observable<any> {
    return this.tinkoffTokenControl.valueChanges.pipe(
      takeUntil(this.destroyed$)
    )
  }

  private getProfileForm(): FormGroup {
    return this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      tinkoffToken: this.tinkoffTokenControl,
    });
  }

  private showMessage(message: string, duration: boolean): void {
    duration
    ? this.snackbar.open(message, 'OK', { duration: 5000 })
    : this.snackbar.open(message, 'OK')
  }
}

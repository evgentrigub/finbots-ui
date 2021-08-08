import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';
import { UserProfileDto } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

interface BrokerPayload {
  controlName: string;
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
  public isTinkoffTokenControl: FormControl;

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
    this.isTinkoffTokenControl = this.formBuilder.control(null);
    this.profileForm = this.getProfileForm();
  }

  public get canSave(): boolean {
    return this.profileForm.valid && this.profileForm.touched;
  }

  public broker: BrokerPayload = {
    controlName: 'isTinkoffToken',
    text: 'Тинькофф Инвестиции',
    isBrokerToken: false,
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
    this.isTinkoffTokenControl.patchValue(false);
    this.profileForm.markAsTouched();
  }

  public onSubmit(): void {
    if (this.profileForm.invalid) {
      return;
    }

    this.loading = true;

    const profile = this.profileForm.value as UserProfileDto;
    this.profileForm.disable();
    this.userService.update(profile)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(_ => {
        this.loading = false;
        this.showMessage("Успешно сохранено");
        this.profileForm.enable();
        this.profileForm.markAsUntouched();

        this.broker.isBrokerToken = !!this.tinkoffTokenControl.value

      }, (error: HttpErrorResponse) => {
        this.profileForm.enable();
        this.loading = false;
        this.showErrorMessage(error);
      });
  }

  private getUserProfile(): Observable<UserProfileDto> {
    return this.userService.get().pipe(
      takeUntil(this.destroyed$),
      tap(profile => {
        this.profileForm.patchValue(profile)
        this.broker.isBrokerToken = !!profile.isTinkoffToken
      })
    )
  }

  private getTinkoffControlChanges(): Observable<any> {
    return this.tinkoffTokenControl.valueChanges.pipe(
      takeUntil(this.destroyed$),
      tap(value => this.isTinkoffTokenControl.setValue(!!value))
    )
  }

  private getProfileForm(): FormGroup {
    return this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null],
      lastName: [null],
      bitrhDate: [null],
      location: [null],
      gender: [null],

      tinkoffToken: this.tinkoffTokenControl,
      isTinkoffToken: this.isTinkoffTokenControl,
    });
  }

  private showErrorMessage(httpError: HttpErrorResponse) {
    if (httpError.error.array && httpError.error.array.length) {
      const arr = httpError.error.array as Array<any>;
      arr.forEach(el => {
        this.snackbar.open(el.msg, 'OK', { duration: 6000 });
      })
    } else {
      this.snackbar.open(httpError.error.msg, 'OK', { duration: 6000 });
    }
  }
  private showMessage(message: any) {
    this.snackbar.open(message, 'OK', { duration: 3000 });
  }
}

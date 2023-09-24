import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthenticationService } from '../../../services/authentication.service';
import { UserService } from '../../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

interface BrokerPayload {
  brokerName: string;
  isBrokerToken: boolean;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<void>();
  private VALIDATION_SUCCESS = "Token is valid. Click on tab 'Create Bot'."
  private VALIDATION_FAILED = "Token is not valid. Check the value and try again. "

  public hide = true;
  public loading = false;
  public isDemoValue = false;
  public checkboxTooltipText = "To use the demo token, check the box"

  public profileForm: FormGroup;
  public tinkoffTokenControl: FormControl;

  public broker: BrokerPayload = {
    brokerName: 'Tinkoff',
    isBrokerToken: false,
  }
  successSnackBarConfig: MatSnackBarConfig<any>;
  failedSnackBarConfig: MatSnackBarConfig<any>;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private detector: ChangeDetectorRef,
    private zone: NgZone,
    private snackbar: MatSnackBar,
    public dialog: MatDialog
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
    this.fetchUserProfile()
    this.setTinkoffControlChanges()
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public onIsDemoCheckboxChanged(){
    this.detector.markForCheck()
    this.detector.detectChanges()
  }

  public onTokenValidation(): void {
    this.userService.getValidateToken(this.isDemoValue).subscribe(
      res => {
        console.log("🚀 ~ file: settings.component.ts:70 ~ SettingsComponent ~ onTokenValidation ~ res:", res)
        const message = res.isValid
          ? this.VALIDATION_SUCCESS
          : this.VALIDATION_FAILED
        this.showMessage(message, res.isValid ? true : false)
      },
      (errorMessage: string) => {
        this.showMessage(errorMessage, false);
    });
  }

  /**
   * NgZone reired for synchronize loading
   */
  public onRemoveToken(item: BrokerPayload): void {
    this.zone.run(() => {
      this.confirmDialog().subscribe(res => {
        if (res) {
          item.isBrokerToken = false;
          this.tinkoffTokenControl.reset();
          this.profileForm.markAsTouched();
        }
      });
    })
  }

  public onSubmit(): void {
    if (this.profileForm.invalid) {
      return;
    }
    this.loading = true;

    const profileDto = this.profileForm.value;
    this.profileForm.disable();
    this.userService.update(profileDto.email, profileDto.tinkoffToken)
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

  private fetchUserProfile(): void {
    this.loading = true;
    this.userService.get()
      .subscribe(profile => {
        this.loading = false;
        this.profileForm.patchValue(profile)
        this.broker.isBrokerToken = !!profile.tinkoffToken

        this.detector.markForCheck()
        this.detector.detectChanges()
      })
  }

  private setTinkoffControlChanges(): void {
    this.tinkoffTokenControl.valueChanges
      .pipe(takeUntil(this.destroyed$)).subscribe()
  }

  private getProfileForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      tinkoffToken: this.tinkoffTokenControl
    });
  }

  private confirmDialog(): Observable<any> {
    const dialogData = new ConfirmDialogModel("Token remove", "Are you sure you want to remove broker?");

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    return dialogRef.afterClosed();
  }

  private showMessage(message: string, duration: boolean): void {
    this.zone.run(() => { setTimeout(() => {
      this.snackbar.open(message, 'OK',  duration ? this.successSnackBarConfig : this.failedSnackBarConfig)}, 0)
    });
  }
}

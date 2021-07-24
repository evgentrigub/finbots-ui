import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserProfileDto } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  public hide = true;
  public loading = false;
  public profileForm: FormGroup;

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
    this.profileForm = this.getProfileForm();
  }

  public get canSave(): boolean {
    return this.profileForm.valid && this.profileForm.touched;
  }

  ngOnInit() {
    this.userService.get().subscribe(res => this.profileForm.patchValue(res))
  }

  public onSubmit(): void {
    if (this.profileForm.invalid) {
      return;
    }

    this.loading = true;
    const profile = this.profileForm.value as UserProfileDto;
    this.profileForm.disable();
    this.userService.update(profile)
      .pipe(first())
      .subscribe(_ => {
        this.loading = false;
        this.showMessage("Успешно сохранено");
        this.profileForm.enable();
        this.profileForm.markAsUntouched();
      }, (error: HttpErrorResponse) => {
        this.profileForm.enable();
        this.loading = false;
        this.showErrorMessage(error);
      });
  }

  private getProfileForm(): FormGroup {
    return this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      tinkoffToken: [null],
      name: [null],
      lastName: [null],
      bitrhDate: [null],
      location: [null],
      gender: [null],
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

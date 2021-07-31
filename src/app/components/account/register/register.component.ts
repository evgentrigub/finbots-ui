import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public hide = true;
  public loading = false;
  public signupform: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private snackbar: MatSnackBar
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
    this.signupform = this.getSignupForm();
    // todo: remove after public signup
    this.signupform.disable();
  }

  public get canSignup(): boolean {
    return this.signupform.valid;
  }

  public onSubmit(): void {
    if (this.signupform.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService
      .register(this.signupform.value)
      .pipe(first())
      .subscribe(_ => {
        this.router.navigate(['dashboard']);
        this.showMessage('Регистрация успешна');
        this.loading = false;
      }, (error: HttpErrorResponse) => {
        this.loading = false;
        this.showErrorMessage(error);
      });
  }

  private getSignupForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  private showErrorMessage(message: HttpErrorResponse): void {
    this.snackbar.open(message.error.message, 'OK', { duration: 6000 });
  }
  private showMessage(message: string): void {
    this.snackbar.open(message, 'OK', { duration: 3000 });
  }
}

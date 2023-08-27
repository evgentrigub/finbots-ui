import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { first, switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '../../../services/authentication.service';
import { UserDto } from '../../../models/user.model';

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
  }

  public get canSignup(): boolean {
    return this.signupform.valid;
  }

  public onSubmit(): void {
    if (this.signupform.invalid) {
      return;
    }

    const form: UserDto = this.signupform.value;
    this.loading = true;
    this.authenticationService
      .register(this.signupform.value)
      .pipe(
        first(),
        switchMap(_ => this.authenticationService.login({
          email: form.email,
          password: form.password
        })),
      )
      .subscribe(_ => {
        this.router.navigate(['dashboard']);
        this.showMessage('Регистрация успешна', true);
        this.loading = false;
      }, (errorMessage: string) => {
        this.loading = false;
        this.showMessage(errorMessage, false);
      });
  }

  private getSignupForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  private showMessage(message: string, duration: boolean): void {
    duration
    ? this.snackbar.open(message, 'OK', { duration: 5000 })
    : this.snackbar.open(message, 'OK')
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private returnUrl: string = '';

  public hide = true;
  public loading = false;
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private snackbar: MatSnackBar
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/operations']);
    }
    this.loginForm = this.getLoginForm();
  }

  public get canLogin(): boolean {
    return this.loginForm.valid;
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'operations';
  }

  public onSubmit(isDemo: boolean): void {
    if (isDemo) {
      this.loginForm.setValue({
        email: 'demo@finbots.success',
        password: 'password'
      })
    }

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService
      .login(this.loginForm.value)
      .subscribe(_ => {
        this.router.navigate([this.returnUrl]);
        this.loading = false;
      }, (errorMessage: string) => {
        this.loading = false;
        this.showMessage(errorMessage, false);
      });
  }

  public onForgetPassword(): void {
    this.showMessage('Функция пока не доступна', true);
  }

  private getLoginForm(): FormGroup {
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  value = '';

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private snackbar: MatSnackBar
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
  }

  get f() {
    return this.loginForm.controls;
  }
  // TO-DO ошибки добавить в разметку позже
  getErrorLogin() {
    return this.loginForm.get('username').hasError('required') ? 'Логин не может быть пустым' : '';
  }
  getErrorPassword() {
    return this.loginForm.get('password').hasError('required') ? 'Пароль не может быть пустым' : '';
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    // setTimeout(() => {
    this.authenticationService
      .login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        () => {
          this.loading = false;
          this.router.navigate([this.returnUrl]);
          this.showMessage('Вход успешно выполнен');
        },
        error => {
          this.showErrorMessage(error);
          this.alertService.error(error);
          this.loading = false;
        }
      );
    // }, 1500);
  }

  forgetPassword() {
    this.showMessage('Функция пока не доступна');
  }

  private showErrorMessage(message: HttpErrorResponse) {
    this.snackbar.open(message.error.message, 'OK', { duration: 6000 });
    // console.log(message);
  }
  private showMessage(message: any) {
    this.snackbar.open(message, 'OK', { duration: 3000 });
    // console.log(message);
  }
}

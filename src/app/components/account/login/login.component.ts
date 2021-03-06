import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  // value = '';

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private snackbar: MatSnackBar
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
  }

  get authForm() {
    return this.loginForm.controls;
  }
  // TO-DO ошибки добавить в разметку позже
  getErrorLogin() {
    return this.loginForm.get('login').hasError('required') ? 'Логин не может быть пустым' : '';
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
      .login(this.authForm.login.value, this.authForm.password.value)
      .pipe(first())
      .subscribe(
        () => {
          this.loading = false;
          this.router.navigate([this.returnUrl]);
          this.showMessage('Вход успешно выполнен');
        },
        (error: HttpErrorResponse) => {
          this.showErrorMessage(error);
          // this.alertService.error(error);
          this.loading = false;
        }
      );
    // }, 1500);
  }

  forgetPassword() {
    this.showMessage('Функция пока не доступна');
  }

  private showErrorMessage(httpError: HttpErrorResponse) {
    console.log("🚀 ~ file: login.component.ts ~ line 90 ~ LoginComponent ~ showErrorMessage ~ message.error", httpError)
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
    // console.log(message);
  }
}

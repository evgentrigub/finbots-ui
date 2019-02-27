import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MinLengthValidator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { AlertService } from '../_services/alert.service';
import { first, retry } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  hide = true;
  value = '';
  
  loginForm:FormGroup;
  loading: boolean = false;
  submitted: boolean = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
    if(this.authenticationService.currentUserValue){
      // this.router.navigate(['/dashboard']);
    }
   }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
  }

  get f() {return this.loginForm.controls;}
  // ошибки добавитьв разметку позже
  getErrorLogin(){
    return this.loginForm.get('username').hasError('required') ? 'Логин не может быть пустым': '';
  }
  getErrorPassword(){
    return this.loginForm.get('password').hasError('required') ? 'Пароль не может быть пустым': '';
  }

  onSubmit() {
    this.submitted = true;

    if(this.loginForm.invalid){
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
    .pipe(first()).subscribe(   
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    )
  }

}

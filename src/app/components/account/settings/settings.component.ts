import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {

  profileForm: FormGroup;
  hide = true;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  get controls() {
    return this.profileForm.controls;
  }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      patronymic: ['', Validators.required],
      email: ['', Validators.required],
      bitrhDate: ['', Validators.required],
      gender: ['', Validators.required],
      location: ['', Validators.required],
      tinkoffToken: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.profileForm.invalid) {
      return;
    }

    // this.loading = true;
    // // setTimeout(() => {
    // this.authenticationService
    //   .login(this.loginForm.value)
    //   .pipe(first())
    //   .subscribe(
    //     () => {
    //       this.loading = false;
    //       this.router.navigate([this.returnUrl]);
    //       this.showMessage('Вход успешно выполнен');
    //     },
    //     (error: HttpErrorResponse) => {
    //       this.showErrorMessage(error);
    //       // this.alertService.error(error);
    //       this.loading = false;
    //     }
    //   );
    // // }, 1500);
  }
}

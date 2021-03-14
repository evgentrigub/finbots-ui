import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first } from 'rxjs/operators';
import { UserProfileDto } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {

  profileForm: FormGroup;
  hide = true;
  submitted = false;
  loading = false;

  constructor(
    private userService: UserService,
    private snackbar: MatSnackBar,
    private formBuilder: FormBuilder,
  ) { }

  get controls() {
    return this.profileForm.controls;
  }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      email: ['', Validators.email],
      tinkoffToken: [''],
      name: [''],
      lastName: [''],
      bitrhDate: [''],
      location: [''],
      gender: [''],
    });

    this.userService.get().subscribe(res => this.profileForm.patchValue(res))
  }

  onSubmit() {
    this.submitted = true;

    if (this.profileForm.invalid) {
      return;
    }

    this.loading = true;
    const profile = this.profileForm.value as UserProfileDto
    // setTimeout(() => {
    this.userService.update(profile)
      .pipe(first())
      .subscribe(_ => {
        this.loading = false;
        this.showMessage("Успешно сохранено");
      }, (error: HttpErrorResponse) => {
        this.showErrorMessage(error);
        // this.alertService.error(error);
        this.loading = false;
      });
    // }, 1500);
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
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-add-modey-to-account',
  templateUrl: './add-modey-to-account.component.html',
  styleUrls: ['./add-modey-to-account.component.scss'],
})
export class AddModeyToAccountComponent implements OnInit {
  dataForm: FormGroup;
  editedStats: User;

  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<AddModeyToAccountComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    this.dataForm = new FormGroup({
      summa: new FormControl('', Validators.required),
    });
  }

  ngOnInit() { }

  addMoney(summa: number) {
    // const prev = this.data.account;
    // this.data.account = summa;
    // this.userService.updateAccount(this.data).subscribe();
    // this.data.account = +prev + +summa;
    this.dialogRef.close();
  }
}

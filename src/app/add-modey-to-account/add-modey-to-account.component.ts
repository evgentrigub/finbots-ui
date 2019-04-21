import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../account/_services/user.service';

@Component({
  selector: 'app-add-modey-to-account',
  templateUrl: './add-modey-to-account.component.html',
  styleUrls: ['./add-modey-to-account.component.css']
})
export class AddModeyToAccountComponent implements OnInit {

  dataForm: FormGroup;
  user: any;

  constructor(
    private userService: UserService,
  ) {
    this.dataForm = new FormGroup({
      "summa": new FormControl('', Validators.required),
    })
   }

  ngOnInit() {
  }

  addMoney(summa){
    this.userService.getById(1).subscribe(user => {this.user = user});
    this.user.account = this.user.account + summa;
    this.userService.update(this.user).subscribe;
  }

}

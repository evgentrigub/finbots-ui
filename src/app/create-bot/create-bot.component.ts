import { Component, OnInit } from '@angular/core';
import { CreateBotService } from './create-bot.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { AuthenticationService } from '../account/_services/authentication.service';
import { User } from '../account/_models/user';
import { Strategy } from '../models/strategy';


@Component({
  selector: 'app-create-bot',
  templateUrl: './create-bot.component.html',
  styleUrls: ['./create-bot.component.css']
})
export class CreateBotComponent implements OnInit {

  get isDefaultProfitRisk(): boolean {
    return this.defaultProfitRisk.value === 'true';
  }

  currentUser: User;
  industries: string[] = [];
  strategies: Strategy[] = [];
  financialInstruments: string[] = [];
  assets: string[] = [];
  name = '';
  strategy = '';
  summa = 0;
  FU = '';
  optimisation = 1;

  private defaultProfitRisk: FormControl = new FormControl('true');

  private formGroup: FormGroup;
  private newRobotControl: FormGroup;

  constructor(
    private service: CreateBotService,
    private formBuilder: FormBuilder,
    private readonly snackBar: MatSnackBar,
    private authenticationService: AuthenticationService,
  ) {
    this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });

    // this.newRobotControl = this.formBuilder.group({});
    this.formGroup = this.formBuilder.group({
      name: this.formBuilder.control('Робот', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]),
      sum: this.formBuilder.control(100, [Validators.required]),
      esValue: this.formBuilder.control(10, [Validators.required]),
      strategy: this.formBuilder.control('', [Validators.required]),
      instrument: this.formBuilder.control('', [Validators.required]),
      industry: this.formBuilder.control('', [Validators.required]),
      asset: this.formBuilder.control('', [Validators.required])
    });
  }

  ngOnInit() {
    this.financialInstruments = this.service.getFinancialInstruments();
    this.industries = this.service.getIndustries();
    this.service.getStrategies().subscribe(r => this.strategies = r);
    this.assets = this.service.getAssets();

  }

  // createRobotControl(): FormGroup {
  //   return this.formGroup = this.formBuilder.group({
  //     name: this.formBuilder.control('Робот', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]),
  //     sum: this.formBuilder.control(100, [Validators.required]),
  //     esValue: this.formBuilder.control(10, [Validators.required]),
  //     strategy: this.formBuilder.control('', [Validators.required]),
  //     instrument: this.formBuilder.control('', [Validators.required]),
  //     industry: this.formBuilder.control('', [Validators.required]),
  //     asset: this.formBuilder.control('', [Validators.required])
  //   });
  // }

  createRobot() {
    const newRobot = this.formGroup.value;
    console.log(newRobot, this.currentUser.id);
    this.service.createBot(newRobot, this.currentUser.id)
      .pipe(
        tap(_ => this.showMessage(`Заявка на создание бота ${newRobot.name} успешна отправлена`))
      ).subscribe();
  }

  private showMessage(msg: any) {
    this.snackBar.open(msg, undefined, { duration: 2000 });
  }
  private formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    if (value <= 100) {
      return value + '%';
    }
    return value;
  }
}

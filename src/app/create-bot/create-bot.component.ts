import { Component, OnInit } from '@angular/core';
import { CreateBotService } from './create-bot.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { MatSnackBar, MatSelectChange } from '@angular/material';
import { AuthenticationService } from '../account/_services/authentication.service';
import { User } from '../account/_models/user';
import { Strategy } from '../models/strategy';
import { CreatedTradingBot } from '../Models/trading-bot-model';
import { EventEmitter } from 'events';
import { forEach } from '@angular/router/src/utils/collection';
import { Industry } from '../Models/industry-enum';


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
  strategies: Strategy[] = [];
  financialInstruments: string[] = [];
  industries: string[] = [];
  assets: string[] = [];
  name = '';
  strategy = '';
  summa = 0;
  FU = '';
  optimisation = 1;

  private formGroup: FormGroup;
  private newRobotControl: FormGroup;
  private defaultProfitRisk: FormControl = new FormControl('true');

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
    this.formGroup = this.createRobotControl();
  }

  ngOnInit() {
    this.financialInstruments = this.service.getFinancialInstruments();
    this.industries = this.service.getIndustries();
    this.service.getStrategies().subscribe(r => this.strategies = r);
  }

  createRobotControl(): FormGroup {
    return this.formGroup = this.formBuilder.group({
      name: this.formBuilder.control('Робот', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]),
      sum: this.formBuilder.control(100, [Validators.required]),
      esValue: this.formBuilder.control(10, [Validators.required]),
      strategy: this.formBuilder.control('', [Validators.required]),
      instrument: this.formBuilder.control('', [Validators.required]),
      industry: this.formBuilder.control('', [Validators.required]),
      asset: this.formBuilder.control('', [Validators.required])
    });
  }

  getAssets(event: MatSelectChange) {
    const value = event.value;
    const num  = this.industries.indexOf(value) + 1;
    console.log(num);
  }

  createRobot() {
    const newRobot = <CreatedTradingBot>this.formGroup.value;
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

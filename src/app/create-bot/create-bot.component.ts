import { Component, OnInit, DoCheck } from '@angular/core';
import { CreateBotService } from './create-bot.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { MatSnackBar, MatSelectChange } from '@angular/material';
import { AuthenticationService } from '../account/_services/authentication.service';
import { User } from '../account/_models/user';
import { Strategy } from '../models/strategy';
import { TradingBotsService } from '../services/trading-bots.service';
import { CreatedTradingBot } from '../Models/trading-bot-model';
import { FinancialInstrument } from '../models/financial-instrument-enum';
import { Industry } from '../Models/industry-enum';
import { Asset } from '../Models/asset';


@Component({
  selector: 'app-create-bot',
  templateUrl: './create-bot.component.html',
  styleUrls: ['./create-bot.component.css']
})
export class CreateBotComponent implements OnInit {

  get isDefaultProfitRisk(): boolean {
    return this.defaultProfitRisk.value === 'true';
  }

  get isStockSelected(): boolean {
    return this.instrumentControl.value === FinancialInstrument[3];
  }

  get isCurrencySelected(): boolean {
    return this.instrumentControl.value === FinancialInstrument[1] ||
      this.instrumentControl.value === FinancialInstrument[2];
  }

  get isIndustrySelected(): boolean {
    return this.industryControl.value;
  }

  currentUser: User;
  strategies: Strategy[] = [];
  financialInstruments: string[] = [];
  industries: string[] = [];
  assets: Asset[] = [];
  name = '';
  strategy = '';
  summa = 0;
  FU = '';
  optimisation = 1;

  private formGroup: FormGroup;
  private industryControl: FormControl = new FormControl();
  private instrumentControl: FormControl = new FormControl();
  private defaultProfitRisk: FormControl = new FormControl('true');


  constructor(
    private service: CreateBotService,
    private tradingBotService: TradingBotsService,
    private formBuilder: FormBuilder,
    private readonly snackBar: MatSnackBar,
    private authenticationService: AuthenticationService,
  ) {
    this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
    this.industryControl = this.formBuilder.control({value: '', disabled: true}, [Validators.required]);
    this.instrumentControl = this.formBuilder.control('', [Validators.required]);

    this.formGroup = this.createRobotControl();
  }

  ngOnInit() {
    this.financialInstruments = this.service.getFinancialInstruments();
    this.industries = this.service.getIndustries();
    this.service.getStrategies().subscribe(r => this.strategies = r);

    // this.service.getIndustries()
    // .forEach(industry => {
    //   this.industries.push(this.tradingBotService.convertingIndustryToString(industry));
    // });
  }

  createRobotControl(): FormGroup {
    return this.formGroup = this.formBuilder.group({
      name: this.formBuilder.control('Робот', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]),
      sum: this.formBuilder.control(100, [Validators.required]),
      esValue: this.formBuilder.control(10, [Validators.required]),
      strategy: this.formBuilder.control('', [Validators.required]),
      instrument: this.instrumentControl,
      industry: this.industryControl,
      asset: this.formBuilder.control('', [Validators.required])
    });
  }

  selectionChangeIndustry(event: MatSelectChange) {
    const value = event.value;
    const num  = this.industries.indexOf(value) + 1;
    // console.log(num);
    this.service.getAssets(FinancialInstrument.Stock, num).subscribe( res => {
      this.assets = res;
    });
  }

  selectionChangeInstrument(event: MatSelectChange) {
    const value = event.value;

    switch (this.instrumentControl.value) {
      case FinancialInstrument[1]:
        this.service.getAssets(FinancialInstrument.Forex, 0).subscribe( res => {
          this.assets = res;
        });
        break;

      case FinancialInstrument[2]:
        this.service.getAssets(FinancialInstrument.Crypto, 0).subscribe( res => {
          this.assets = res;
        });
        break;
    }


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

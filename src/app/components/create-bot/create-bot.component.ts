import { Component, OnInit } from '@angular/core';
import { CreateBotService } from './create-bot.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user';
import { Ticker } from '../../models/asset';
import { FinancialInstrument } from '../../models/enums';
import { AuthenticationService } from '../../services/authentication.service';
import { BotDto } from 'src/app/models/trading-bot-model';
import { StrategyViewModel } from 'src/app/models/strategy';

@Component({
  selector: 'app-create-bot',
  templateUrl: './create-bot.component.html',
  styleUrls: ['./create-bot.component.css'],
})
export class CreateBotComponent implements OnInit {
  currentUser: User;
  financialInstruments: string[] = [];
  tickers: Ticker[] = [];
  strategies: StrategyViewModel[] = [];

  formGroup: FormGroup;
  strategyControl: FormControl = new FormControl();
  instrumentControl: FormControl = new FormControl();

  constructor(
    private service: CreateBotService,
    private formBuilder: FormBuilder,
    private readonly snackBar: MatSnackBar,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.$currentUser.subscribe(user => this.currentUser = user);
    this.financialInstruments = this.service.getFinancialInstruments();
    this.tickers = this.service.getSecurities(FinancialInstrument.Stock);
    this.strategies = this.service.getStrategies()

    this.instrumentControl = this.formBuilder.control(FinancialInstrument.Stock, [Validators.required]);
    this.strategyControl = this.formBuilder.control(this.strategies[0].name)
    this.formGroup = this.createBotFormGroup();
  }

  ngOnInit() {
  }

  submitBot() {
    const value = this.formGroup.value;
    const newRobot = <BotDto>{
      ticker: value.ticker,
      strategy: value.strategy
    }
    this.service.createBot(newRobot)
      .subscribe(
        _ => this.showMessage(`Заявка на создание бота ${newRobot.ticker} успешна отправлена`),
        err => this.showMessage(err)
      );
  }

  private createBotFormGroup(): FormGroup {
    return this.formBuilder.group({
      strategy: this.strategyControl,
      instrument: this.instrumentControl,
      ticker: ['', [Validators.required]],
    });
  }

  private showMessage(msg: any) {
    this.snackBar.open(msg, undefined, { duration: 2000 });
  }
}

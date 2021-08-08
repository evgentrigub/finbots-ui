import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user.model';
import { FinancialInstrument } from '../../models/enums';
import { AuthenticationService } from '../../services/authentication.service';
import { BotDto, TradingBot } from '../../models/trading-bot.model';
import { StrategyViewModel } from '../../models/strategy.model';
import { SelectData } from '../../models/statistics.model';
import { CreateBotService } from '../../services/create-bot.service';
import { TradingBotsService } from 'src/app/services/trading-bots.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bot',
  templateUrl: './create-bot.component.html',
  styleUrls: ['./create-bot.component.scss'],
})
export class CreateBotComponent implements OnInit {
  currentUser: User;
  financialInstruments: string[] = [];
  tickers: SelectData<string>[] = [];
  strategies: StrategyViewModel[] = [];

  formGroup: FormGroup;
  strategyControl: FormControl = new FormControl();
  instrumentControl: FormControl = new FormControl();

  constructor(
    private readonly snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private service: CreateBotService,
    private authenticationService: AuthenticationService,
    private botService: TradingBotsService,
    private router: Router
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
    };
    let tr: TradingBot = {
      id: "3",
      ticker: newRobot.ticker,
      createdDate: 1,
      isActive: true,
      broker: "Tinkoff",
      brokerFee: 0.03,
      strategy: value.strategy,
      workedTime: "",
      profit: "1.2",
    }
    this.botService.mockBotsArray.push(tr);
    this.service.createBot(newRobot)
      .subscribe(() => {
        this.router.navigate(['/table'])
        this.showMessage(`Заявка на создание бота ${newRobot.ticker} успешна отправлена`)
      },
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user.model';
import { AuthenticationService } from '../../services/authentication.service';
import { BotDto, CronStatus, TradingBot } from '../../models/trading-bot.model';
import { StrategyName, StrategyViewModel } from '../../models/strategy.model';
import { SelectData } from '../../models/statistics.model';
import { CreateBotService } from '../../services/create-bot.service';
import { TradingBotsService } from '../../services/trading-bots.service';

@Component({
  selector: 'app-create-bot',
  templateUrl: './create-bot.component.html',
  styleUrls: ['./create-bot.component.scss'],
})
export class CreateBotComponent implements OnInit {

  public loading = false;

  public firstForm: FormGroup;
  public secondForm: FormGroup;
  public strategyControl: FormControl = new FormControl();
  public instrumentControl: FormControl = new FormControl();

  public currentUser: User;
  // public financialInstruments: string[] = [];
  public tickers: SelectData<string>[] = [];
  public strategies: StrategyViewModel[] = [];


  constructor(
    private readonly snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private router: Router,
    private botService: CreateBotService,
    private authenticationService: AuthenticationService,
    private tradingService: TradingBotsService,
  ) {
    this.authenticationService.$currentUser.subscribe(user => this.currentUser = user);
    this.tickers = this.botService.getAssets();
    this.strategies = this.botService.getStrategies()

    this.strategyControl = this.formBuilder.control(null, [Validators.required])
    this.firstForm = this.getFirstFormGroup();
    this.secondForm = this.getSecondFormGroup();
  }

  ngOnInit() {
  }

  submitBot() {
    const ticketValue = this.firstForm.value.ticker;
    console.log("🚀 ~ file: create-bot.component.ts:55 ~ CreateBotComponent ~ submitBot ~ ticketValue:", ticketValue)
    const strategyValue = this.secondForm.value.strategy;
    console.log("🚀 ~ file: create-bot.component.ts:56 ~ CreateBotComponent ~ submitBot ~ strategyValue:", strategyValue)

    // TODO property isCustomStrategy
    const botDto = <BotDto>{
      ticker: ticketValue,
      isCustomStrategy: false,
      strategy: {
        botInterval: 0,
        techAnalysisPeriod: 0
      },
      strategyName: strategyValue
    };

    // TODO mock set
    // this.setMockBot(botDto);

    this.loading = true;
    this.botService.createBot(botDto)
      .subscribe(() => {
        this.loading = true;
        this.router.navigate(['/bots']);
        this.showMessage(`Request to create bot ${botDto.ticker} sent`, true);
      },
      err => {
        this.loading = false;
        this.showMessage(err, false)
      });
  }

  private getFirstFormGroup(): FormGroup {
    return this.formBuilder.group({
      ticker: [null, [Validators.required]],
    });
  }

  private getSecondFormGroup(): FormGroup {
    return this.formBuilder.group({
      strategy: this.strategyControl,
    });
  }

  private showMessage(message: string, duration: boolean): void {
    duration
    ? this.snackBar.open(message, 'OK', { duration: 5000 })
    : this.snackBar.open(message, 'OK')
  }

  // TODO
  private setMockBot(newbot: BotDto) {
    const mockBot: TradingBot = {
      id: (this.tradingService.mockBotsArray.length + 1).toString(),
      ticker: newbot.ticker,
      createdDate: 1,
      isActive: true,
      broker: "Tinkoff",
      brokerFee: 0.03,
      strategy: newbot.strategyName,
      workedTime: "",
      profit: "10",
      status: CronStatus.Scheduled
    };
    this.tradingService.mockBotsArray.push(mockBot);
  }
}

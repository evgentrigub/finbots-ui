import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user.model';
import { AuthenticationService } from '../../services/authentication.service';
import { BotDto, TradingBot } from '../../models/trading-bot.model';
import { StrategyViewModel } from '../../models/strategy.model';
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
    const firstStep = this.firstForm.value;
    const secondStep = this.secondForm.value;
    const newbot = <BotDto>{
      ticker: firstStep.ticker,
      strategy: secondStep.strategy
    };

    const mockBot: TradingBot = {
      id: (this.tradingService.mockBotsArray.length + 1).toString(),
      ticker: newbot.ticker,
      createdDate: 1,
      isActive: true,
      broker: "Tinkoff",
      brokerFee: 0.03,
      strategy: secondStep.strategy,
      workedTime: "",
      profit: "10",
    }
    this.tradingService.mockBotsArray.push(mockBot);

    this.loading = true;
    this.botService.createBot(newbot)
      .subscribe(() => {
        this.router.navigate(['/bots']);
        this.showMessage(`Request to create bot ${newbot.ticker} sent`);
      },
        err => this.showMessage(err),
        () => this.loading = false
      );
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

  private showMessage(msg: any) {
    this.snackBar.open(msg, undefined, { duration: 2000 });
  }
}

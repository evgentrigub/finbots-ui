import { Component, OnInit } from '@angular/core';
import { CreateBotService } from './create-bot.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user';
import { Strategy } from '../../models/strategy';
import { Asset } from '../../models/asset';
import { FinancialInstrument } from '../../models/enums';
import { AuthenticationService } from '../../services/authentication.service';
import { tap } from 'rxjs/operators';
import { BotDto } from 'src/app/models/trading-bot-model';

@Component({
  selector: 'app-create-bot',
  templateUrl: './create-bot.component.html',
  styleUrls: ['./create-bot.component.css'],
})
export class CreateBotComponent implements OnInit {
  currentUser: User;
  financialInstruments: string[] = [];
  assets: Asset[] = [];
  strategies: Strategy[] = [];

  formGroup: FormGroup;
  strategyControl: FormControl = new FormControl('true');
  instrumentControl: FormControl = new FormControl();

  constructor(
    private service: CreateBotService,
    private formBuilder: FormBuilder,
    private readonly snackBar: MatSnackBar,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(user => this.currentUser = user);
    this.financialInstruments = this.service.getFinancialInstruments();
    this.assets = this.service.getSecurities(FinancialInstrument.Stock);
    this.strategies = this.service.getStrategies()

    this.instrumentControl = this.formBuilder.control(FinancialInstrument.Stock, [Validators.required]);
    this.strategyControl = this.formBuilder.control(this.strategies[0])
    this.formGroup = this.createBotFormGroup();
  }

  ngOnInit() {
  }

  submitBot() {
    const newRobot = this.formGroup.value as BotDto;
    this.service.createBot(newRobot)
      .pipe(
        tap(_ => this.showMessage(`Заявка на создание бота ${newRobot.ticker} успешна отправлена`))
      ).subscribe();
  }

  private createBotFormGroup(): FormGroup {
    return this.formBuilder.group({
      strategy: this.strategyControl,
      instrument: this.instrumentControl,
      asset: ['', [Validators.required]],
    });
  }

  private showMessage(msg: any) {
    this.snackBar.open(msg, undefined, { duration: 2000 });
  }
}

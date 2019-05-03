import { Component, OnInit } from '@angular/core';
import { CreateBotService } from './create-bot.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreatedTradingBot } from '../Models/trading-bot-model';
import { tap } from 'rxjs/operators';
import { MatSnackBar, ShowOnDirtyErrorStateMatcher } from '@angular/material';


@Component({
  selector: 'app-create-bot',
  templateUrl: './create-bot.component.html',
  styleUrls: ['./create-bot.component.css']
})
export class CreateBotComponent implements OnInit {

  industries: string[] = [];
  strategies: string[] = [];
  financialInstruments: string[] = [];
  name = '';
  strategy = '';
  summa = 0;
  FU = '';
  optimisation = 1;

  private formGroup: FormGroup;
  private newRobotControl: FormGroup;

  constructor(
    private service: CreateBotService,
    private formBuilder: FormBuilder,
    private readonly snackBar: MatSnackBar,
  ) {

    this.newRobotControl = this.formBuilder.group({});
    this.formGroup = this.formBuilder.group({
      data: this.newRobotControl = this.createRobotControl(),
    });
  }

  ngOnInit() {
    this.strategies = this.service.getStrategies();
    this.industries = this.service.getIndustries();
    this.financialInstruments = this.service.getFinancialInstruments();
  }

  createRobotControl(): FormGroup {
    return this.formGroup = this.formBuilder.group({
      name: this.formBuilder.control('Робот', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]),
      sum: this.formBuilder.control(100, [Validators.required]),
      goal: this.formBuilder.control('profit', [Validators.required]),
      goalValue: this.formBuilder.control(10, [Validators.required]),
      strategy: this.formBuilder.control('', [Validators.required]),
      instrument: this.formBuilder.control('', [Validators.required]),
    });
  }

  createRobot() {
    const newRobot = <CreatedTradingBot>this.formGroup.value;
    console.log(newRobot);
    // бэк для метода пока не готов
    // this.service.createBot(newRobot)
    //   .pipe(
    //     tap(_ => this.showMessage(`Заявка на создание бота ${newRobot.name} успешна отправлена`))
    //   ).subscribe();
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

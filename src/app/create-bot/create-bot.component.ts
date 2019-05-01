import { Component, OnInit } from '@angular/core';
import { CreateBotService } from './create-bot.service';
import { FormBuilder, FormGroup, Validators, MinLengthValidator } from '@angular/forms';


@Component({
  selector: 'app-create-bot',
  templateUrl: './create-bot.component.html',
  styleUrls: ['./create-bot.component.css']
})
export class CreateBotComponent implements OnInit {

  industries: string[] = [];
  strategies: string[] = [];
  financialInstruments: string[] = [];
  horisonts: string[] = ['0-7 дней', '7-30 дней', '30-180 дней', '180-365 дней'];
  name = '';
  strategy = '';
  summa = 0;
  FU = '';
  optimisation = 1;

  private formGroup: FormGroup;
  private newRobotControl: FormGroup;

  constructor(
    private service: CreateBotService,
    private formBuilder: FormBuilder
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
      name: this.formBuilder.control('aaa', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]),
      sum: this.formBuilder.control(100, [Validators.required, Validators.minLength(10), Validators.maxLength(1000000)]),
      goal: this.formBuilder.control('profit', [Validators.required]),
      goalValue: this.formBuilder.control(10, [Validators.required]),
      strategy: this.formBuilder.control('', [Validators.required]),
      instrument: this.formBuilder.control('', [Validators.required]),
    });
  }

  createRobot() {
    console.log(this.formGroup.value);
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

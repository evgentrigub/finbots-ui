import { Component, OnInit } from '@angular/core';
import { IndustriesService } from '../Services/industries.service';
import { StrategyService } from '../Services/strategy.service';
import { FinancialInstrumentsService } from '../Services/financial-instruments.service';
import { Horisont } from '../Models/horisont-model';


@Component({
  selector: 'app-create-bot',
  templateUrl: './create-bot.component.html',
  styleUrls: ['./create-bot.component.css']
})
export class CreateBotComponent implements OnInit {

  industries: string[] = [];
  strategies: string[] = [];
  financialInstruments: string[] =[];
  horisonts: string[]=['0-7 дней','7-30 дней','30-180 дней','180-365 дней'];
  name: string = '';
  strategy: string = '';
  summa: number;
  FU: string = '';
  optimisation: number = 1;
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    if (value <= 100) {
      return value + '%';
    }
    return value;
  }

  constructor(private industiesService: IndustriesService,
              private stratefiesService: StrategyService,
              private financialUnstrimentService: FinancialInstrumentsService) { }

  ngOnInit() {
    this.strategies = this.stratefiesService.getStrategies();
    this.industries = this.industiesService.getIndustries();
    this.financialInstruments = this.financialUnstrimentService.getFinancialInstruments();
    // this.horisont = Object.values(Horisont);
  }

  addBot() {
    console.log(this.summa)
  }
  takeValue(event) {
    this.name = event.target.value;
  }
  takeStrategy(event) {
    this.strategy = event.value;
  }
  takeFU(event) {
    this.FU = event.value;
  }
  getSumm(event) {
    this.summa = event.target.value;
  }

}

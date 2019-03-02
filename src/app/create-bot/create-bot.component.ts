import { Component, OnInit } from '@angular/core';
import { IndustriesService } from '../Services/industries.service';
import { StrategyService } from '../Services/strategy.service';
import { FinancialInstrumentsService } from '../Services/financial-instruments.service';


@Component({
  selector: 'app-create-bot',
  templateUrl: './create-bot.component.html',
  styleUrls: ['./create-bot.component.css']
})
export class CreateBotComponent implements OnInit {

  industries: string[] = [];
  strategies: string[] = [];
  financialInstruments: string[] =[];
  name: string = '';
  strategy: string = '';
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
  }

  addBot() {
    console.log(this.FU)
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

}

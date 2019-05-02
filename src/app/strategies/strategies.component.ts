import { Component, OnInit } from '@angular/core';
import { StrategyService } from '../services/strategy.service';
import { Strategy } from '../Models/strategy';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-strategies',
  templateUrl: './strategies.component.html',
  styleUrls: ['./strategies.component.css']
})
export class StrategiesComponent implements OnInit {

  strategies: Strategy[];

  constructor(
    private strategyService: StrategyService
  ) { }


  ngOnInit() {
    this.strategyService.getStrategies().subscribe(strategies => {
        this.strategies = strategies;
        console.log(strategies);
      })
  }

}

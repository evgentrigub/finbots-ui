import { Component, OnInit } from '@angular/core';
import { StrategyService } from '../services/strategy.service';
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

  constructor(
    private strategyService: StrategyService
  ) { }


  ngOnInit() {
    this.strategyService.getStrategies().subscribe(strategy => 
      {
        console.log(strategy);
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { StrategyService } from '../services/strategy.service';
import { Strategy } from '../models/strategy';
import { MatDialog } from '@angular/material';
import { StrategyDialogComponent } from './strategy-dialog/strategy-dialog.component';


@Component({
  selector: 'app-strategies',
  templateUrl: './strategies.component.html',
  styleUrls: ['./strategies.component.css']
})
export class StrategiesComponent implements OnInit {

  strategies: Strategy[];

  constructor(
    private strategyService: StrategyService,
    public dialog: MatDialog
  ) { }


  ngOnInit() {
    this.strategyService.getStrategies().subscribe(strategies => {
        this.strategies = strategies;
      });
  }

  openDialog(strategy: Strategy){
    const dialogRef = this.dialog.open(StrategyDialogComponent, {
      panelClass: 'dialog',
      data: strategy,
      width: '800px',
      height: '800px'
    });
  } 

}

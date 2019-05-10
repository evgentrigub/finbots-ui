import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { TradingBot } from '../models/trading-bot-model';
import { TradingBotsService } from '../services/trading-bots.service';
import { BotStatsDialogComponent } from './bot-stats-dialog/bot-stats-dialog.component';


@Component({
  selector: 'app-table-bots',
  templateUrl: './table-bots.component.html',
  styleUrls: ['./table-bots.component.css']
})

export class TableBotsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'strategy', 'timeframe', 'profit', 'actions'];
  dataSource: MatTableDataSource<TradingBot> = new MatTableDataSource;
  isLoading = true;

  constructor(
    private tradingBotsService: TradingBotsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getRobots();
  }

  getRobots(){
    this.tradingBotsService.getUserRobots(1).subscribe(bots => {
      this.dataSource.data = bots;
      console.log(bots);
      this.isLoading = false;
    });
  }

  stopBot(bot: TradingBot) {
    var activity = !(bot.isActive)
    bot.isActive = activity;
    console.log(activity)
    this.tradingBotsService.updateRobotData(bot).subscribe();
  }

  delete(bot: TradingBot) {
    this.tradingBotsService.deleteRobotData(bot).subscribe();
    this.getRobots();
  }

  openDialog(row: TradingBot) {
    const dialogRef = this.dialog.open(BotStatsDialogComponent, {
      panelClass: 'dialog',
      width: '500px',
      height: '500px',
      data: row,
      disableClose: true
    });
    dialogRef.backdropClick().subscribe(result => {
      if (confirm('Закрыть окно?')) {
        dialogRef.close();
      }
    });
  }

}

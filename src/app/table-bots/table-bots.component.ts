import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { TradingBot } from '../models/trading-bot-model';
import { TradingBotsService } from '../services/trading-bots.service';
import { BotStatsDialogComponent } from './bot-stats-dialog/bot-stats-dialog.component';

// const bots: TradingBot[] = [
//   {id: 1, name: 'Бот по акциям', strategy: 'Локомотив Сбербанк', financialInstrument: 'Акции',
//     profit: '-5%', workedTime: '2 дня', status: 'Активный', type: ''},
//   {id: 2, name: 'Торгуем криптой', strategy: 'Биткоин max', financialInstrument: 'Криптовалюта',
//   profit: '+9%', workedTime: '3 часа', status: 'Активный', type: ''}
// ];

@Component({
  selector: 'app-table-bots',
  templateUrl: './table-bots.component.html',
  styleUrls: ['./table-bots.component.css']
})

export class TableBotsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'strategy', 'timeframe', 'status', 'profit', 'actions'];
  dataSource: MatTableDataSource<TradingBot> = new MatTableDataSource;
  isLoading = true;

  constructor(
    private tradingBotsService: TradingBotsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.tradingBotsService.getUserRobots(1).subscribe(bots => {
      this.dataSource.data = bots;
      console.log(bots);
      this.isLoading = false;
    });
  }

  stopBot(bot: TradingBot) {
    bot.isActive = !bot.isActive;
    this.tradingBotsService.updateRobotData(bot).subscribe();
  }

  openDialog(row: TradingBot) {
    const dialogRef = this.dialog.open(BotStatsDialogComponent, {
      panelClass: 'dialog',
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

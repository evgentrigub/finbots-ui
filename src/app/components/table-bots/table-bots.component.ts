import { Component, OnInit } from '@angular/core';
import { BotStatsDialogComponent } from './bot-stats-dialog/bot-stats-dialog.component';
import { tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { TradingBot } from 'src/app/models/trading-bot-model';
import { TradingBotsService } from 'src/app/services/trading-bots.service';

@Component({
  selector: 'app-table-bots',
  templateUrl: './table-bots.component.html',
  styleUrls: ['./table-bots.component.css'],
})
export class TableBotsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'strategy', 'timeframe', 'profit', 'actions'];
  dataSource: MatTableDataSource<TradingBot> = new MatTableDataSource();
  isLoading = true;

  constructor(private readonly tradingBotsService: TradingBotsService, private readonly snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
    this.getRobots();
  }

  getRobots() {
    this.tradingBotsService.getUserRobots(1).subscribe(bots => {
      this.dataSource.data = bots;
      this.isLoading = false;
    });
  }

  stopBot(bot: TradingBot) {
    bot.isActive = !bot.isActive;
    this.tradingBotsService
      .updateRobotData(bot)
      .pipe(
        tap(
          _ => {
            if (bot.isActive === false) {
              this.showMessage('Отправлен запрос на остановку бота');
            } else {
              this.showMessage('Отправлен запрос на запуск бота');
            }
          },
          err => this.showMessage(err)
        )
      )
      .subscribe();
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
      disableClose: true,
    });
    dialogRef.backdropClick().subscribe(result => {
      if (confirm('Закрыть окно?')) {
        dialogRef.close();
      }
    });
  }

  private showMessage(msg: any) {
    this.snackBar.open(msg, undefined, { duration: 2000 });
  }
}

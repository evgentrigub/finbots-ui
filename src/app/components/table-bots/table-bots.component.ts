import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { TradingBot } from '../../models/trading-bot.model';
import { TradingBotsService } from '../../services/trading-bots.service';

@Component({
  selector: 'app-table-bots',
  templateUrl: './table-bots.component.html',
  styleUrls: ['./table-bots.component.scss'],
})
export class TableBotsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'ticker', 'strategy', 'timeframe', 'profit', 'status', 'actions'];
  dataSource: MatTableDataSource<TradingBot> = new MatTableDataSource();
  isLoading = true;

  readonly ONE_DAY=1000*60*60;

  constructor(private readonly tradingBotsService: TradingBotsService, private readonly snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
    this.fetchBots();
  }

  public stopBot(bot: TradingBot): void {
    bot.isActive = !bot.isActive;
    this.tradingBotsService
      .updateBotData(bot)
      .pipe(
        tap(
          _ => {
            (bot.isActive === false)
              ? this.showMessage('Request to stop bot sent')
              : this.showMessage('Request to start bot sent')
          },
          err => this.showMessage(err)
        ))
      .subscribe();
  }

  public delete(bot: TradingBot): void {
    this.tradingBotsService.deleteBotData(bot).subscribe();
    this.fetchBots();
  }

  private fetchBots(): void {
    this.tradingBotsService.getUserBots().subscribe(bots => {
      this.dataSource.data = bots;

      bots.forEach(bot => {
        bot.workedTime = msToTime(Date.now() - bot.createdDate)
      })

      this.isLoading = false;
    });
  }

  private showMessage(msg: any) {
    this.snackBar.open(msg, undefined, { duration: 2000 });
  }

  // public openDialog(row: TradingBot): void {
  //   const dialogRef = this.dialog.open(BotStatsDialogComponent, {
  //     panelClass: 'dialog',
  //     width: '500px',
  //     height: '500px',
  //     data: row,
  //     disableClose: true,
  //   });
  //   dialogRef.backdropClick().subscribe(result => {
  //     if (confirm('Close window?')) {
  //       dialogRef.close();
  //     }
  //   });
  // }
}

const msToTime = (duration: number) => {
  let minutes = Math.floor((duration / (1000 * 60)) % 60)
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  const hoursStr = (hours < 10) ? "0" + hours : hours.toString();
  const minutesStr = (minutes < 10) ? "0" + minutes : minutes.toString();

  return hoursStr + "h " + minutesStr + "m "
}

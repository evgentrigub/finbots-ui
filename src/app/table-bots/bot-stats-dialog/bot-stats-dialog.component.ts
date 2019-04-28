import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TradingBot } from 'src/app/Models/trading-bot-model';

@Component({
  selector: 'app-bot-stats-dialog',
  templateUrl: './bot-stats-dialog.component.html',
  styleUrls: ['./bot-stats-dialog.component.css']
})
export class BotStatsDialogComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<BotStatsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TradingBot
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

}

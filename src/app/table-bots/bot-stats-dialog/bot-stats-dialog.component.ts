import { Component, OnInit, Inject } from '@angular/core';
import { TradingBot } from 'src/app/models/trading-bot-model';
import { TradingBotsService } from 'src/app/services/trading-bots.service';
import { Asset } from 'src/app/models/asset';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-bot-stats-dialog',
  templateUrl: './bot-stats-dialog.component.html',
  styleUrls: ['./bot-stats-dialog.component.css'],
})
export class BotStatsDialogComponent implements OnInit {
  asset: Asset;
  industry: string;
  financialInstrument: string;

  constructor(
    public dialogRef: MatDialogRef<BotStatsDialogComponent>,
    private tradingBotsService: TradingBotsService,
    @Inject(MAT_DIALOG_DATA) public data: TradingBot
  ) {}

  ngOnInit() {
    this.getDescription(this.data.id);
  }

  getDescription(bot_id: string) {
    this.tradingBotsService.getDescription(bot_id).subscribe(r => {
      this.asset = r;
      this.industry = this.tradingBotsService.convertingIndustryToString(r.industry);
      this.financialInstrument = this.tradingBotsService.convertingFinancialInstrumentToString(r.financialInstrument);
    });
  }
}

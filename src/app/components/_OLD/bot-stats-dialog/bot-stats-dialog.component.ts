// import { Component, OnInit, Inject } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { Ticker } from '../../../models/tickers.model';
// import { TradingBot } from '../../../models/trading-bot.model';
// import { TradingBotsService } from '../../../services/trading-bots.service';

// @Component({
//   selector: 'app-bot-stats-dialog',
//   templateUrl: './bot-stats-dialog.component.html',
//   styleUrls: ['./bot-stats-dialog.component.scss'],
// })
// export class BotStatsDialogComponent implements OnInit {
//   asset: Ticker;
//   industry: string;
//   financialInstrument: string;

//   constructor(
//     public dialogRef: MatDialogRef<BotStatsDialogComponent>,
//     private tradingBotsService: TradingBotsService,
//     @Inject(MAT_DIALOG_DATA) public data: TradingBot
//   ) { }

//   ngOnInit() {
//     //this.getDescription(this.data.id);
//   }

//   getDescription(bot_id: string) {
//     this.tradingBotsService.getDescription(bot_id).subscribe(r => {
//       this.asset = r;
//       // this.industry = this.tradingBotsService.convertingIndustryToString(r.industry);
//       // this.financialInstrument = this.tradingBotsService.convertingFinancialInstrumentToString(r.financialInstrument);
//     });
//   }
// }

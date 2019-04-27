import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TradingBot } from '../Models/trading-bot-model';
import { TradingBotsService } from '../services/trading-bots.service';
import { Observable } from 'rxjs';


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
  //'instrument' result
  dataSource: MatTableDataSource<TradingBot> = new MatTableDataSource;

  constructor(
    private tradingBotsService: TradingBotsService,
  ) { }

  ngOnInit() {
    this.tradingBotsService.getUserRobpts(1).subscribe(bots => {
      this.dataSource.data = bots;
    });
    // this.dataSource.data = bots;
  }

}

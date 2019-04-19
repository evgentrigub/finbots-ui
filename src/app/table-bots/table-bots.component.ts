import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TradingBot } from '../Models/trading-bot-model';
import { TradingBotsService } from '../services/trading-bots.service';
import { Observable } from 'rxjs';


// const bots: TradingBot[] = [
//   {id:1, name:'Бот по акциям', strategy:'Локомотив Сбербанк', conditions:'Риск 15%', instrument:'Акции', result:'-5%', time:'2 дня', status:'Активный'},
//   {id:2, name:'Торгуем криптой', strategy:'Биткоин max', conditions:'Доходность 10%', instrument:'Криптовалюта', result:'+9%', time:'3 часа', status: 'Активный'}
// ]

@Component({
  selector: 'app-table-bots',
  templateUrl: './table-bots.component.html',
  styleUrls: ['./table-bots.component.css']
})

export class TableBotsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'strategy', 'timeframe', 'status', 'profit', 'actions'];
  //'instrument' result
  dataSource: MatTableDataSource<TradingBot> = new MatTableDataSource;
  bots: Observable<TradingBot[]>;

  constructor(
    private tradingBotsService: TradingBotsService,
  ) { }

  ngOnInit() {
    this.tradingBotsService.getUserRobpts(1).subscribe(bots => {
      this.dataSource.data = bots;
      console.log(this.dataSource.data)
    });
  }

}

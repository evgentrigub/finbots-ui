import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TradingBot } from '../Models/trading-bot-model';


const bots: TradingBot[] = [
  {id:1, name:'Бот по акциям>', strategy:'Локомотив Сбербанк', conditions:'Риск 15%', instrument:'Акции', result:'-5%', time:'2 дня'},
  {id:2, name:'Торгуем криптой', strategy:'Биткоин max', conditions:'Доходность 10%', instrument:'Криптовалюта', result:'+9%',time:'3 часа'}
]

@Component({
  selector: 'app-table-bots',
  templateUrl: './table-bots.component.html',
  styleUrls: ['./table-bots.component.css']
})

export class TableBotsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'strategy', 'conditions', 'instrument', 'result', 'time', 'actions'];
  dataSource: MatTableDataSource<TradingBot>;

  constructor() { 
    this.dataSource = new MatTableDataSource(bots)
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TradingBot } from '../trading-bot-model';


const bots: TradingBot[] = [
  
]

@Component({
  selector: 'app-table-bots',
  templateUrl: './table-bots.component.html',
  styleUrls: ['./table-bots.component.css']
})

export class TableBotsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<TradingBot>;

  constructor() { }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { Ticker } from '../Models/tickers-model';

@Injectable({
  providedIn: 'root'
})
export class TickersService {

  mockTick: Ticker[] = [
    {
      id: 1,
      ticker: 'AAPL',
      name: 'Apple Corporation',
      industry: 'IT-компании',
      profit: 0,
      risk: 0
    },
    {
      id: 2,
      ticker: '',
      name: 'AAPL',
      industry: 'IT-компании',
      profit: 0,
      risk: 0
    },
    { 
      id: 1,
      ticker: '',
      name: 'AAPL',
      industry: 'IT-компании',
      profit: 0,
      risk: 0
    },
    {
      id: 1,
      ticker: '',
      name: 'AAPL',
      industry: 'IT-компании',
      profit: 0,
      risk: 0
    }
]
  constructor() { }
}
